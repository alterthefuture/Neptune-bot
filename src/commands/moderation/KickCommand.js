const BaseCommand = require('../../utils/structures/BaseCommand');
const { APIMessage, Structures } = require("discord.js");

module.exports = class KickCommand extends BaseCommand {
  constructor() {
    super('kick', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.inlineReply("**You are missing the permission:** `kick_members`");
    if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.inlineReply("**I'm missing the permission:** `kick_members`");

    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
    
    if(!reason) reason == "None";
    if(!args[0]) return message.inlineReply("**Please mention a user to kick.**");
    if(!mentionedMember) return message.inlineReply("**Couldn't find mentioned user.**");
    if(!mentionedMember.kickable) return message.inlineReply("**Couldn't kick. that user.**");
    if(mentionedMember.id == client.user.id) return message.inlineReply("**You can't kick. the bot.**")
    if(mentionedMember.id == message.author.id) return message.inlineReply("**You can't kick. yourself.**")

    try{
      await mentionedMember.kick(reason)
      message.channel.send(`*${mentionedMember.user.tag} was kicked | Reason: ${reason}*`);
    } catch(err){
      message.inlineReply("**Couldn't kick that user.**");
    }
  } 
}