const BaseCommand = require('../../utils/structures/BaseCommand');
const { APIMessage, Structures } = require("discord.js");

module.exports = class BanCommand extends BaseCommand {
  constructor() {
    super('ban', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.inlineReply("**You are missing the permission:** `ban_members`");
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.inlineReply("**I'm missing the permission:** `ban_members`");

    const mentionedMember = message.mentions.members.first();
    let reason = args.slice(1).join(" ");
4
    if(!reason) reason == "None";
    if(!args[0]) return message.inlineReply("**Please mention a user to ban.**");
    if(!mentionedMember) return message.inlineReply("**Couldn't find mentioned user.**");
    if(!mentionedMember.bannable) return message.inlineReply("**Couldn't ban that user.**");
    if(mentionedMember.id == client.user.id) return message.inlineReply("**You can't ban the bot.**")
    if(mentionedMember.id == message.author.id) return message.inlineReply("**You can't ban yourself.**")

    try{
      await mentionedMember.ban({
        days: 7,
        reason: reason
      })
      message.channel.send(`*${mentionedMember.user.tag} was banned | Reason: ${reason}*`);
    } catch(err){
      message.inlineReply("*Couldn't ban that user.**");
    }
  } 
}