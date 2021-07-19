const { MessageMentions } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class UnmuteCommand extends BaseCommand {
  constructor() {
    super('unmute', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.inlineReply("**You are missing the permission:** `manage_roles`");
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.inlineReply("**I'm missing the permission:** `manage_roles`");

    const mentionedMember = message.mentions.members.first();

    if(mentionedMember.id == client.user.id) return message.inlineReply("**You can't unmute the bot.**")
    if(mentionedMember.id == message.author.id) return message.inlineReply("**You can't unmute yourself.**")
    if(!args[0]) return message.inlineReply("**Please mention a user to unmute.**")
    
    if(mentionedMember){
      let muteRole = message.guild.roles.cache.find(role => role.name == 'Muted');
      if(!muteRole) return message.inlineReply("**Mute role not found.**");

      let memberTarget = message.guild.members.cache.get(mentionedMember.id);

      if(mentionedMember.roles.cache.some(r => r.name == "Muted")) {
        await memberTarget.roles.remove(muteRole.id);

        message.inlineReply(`*Successfully unmuted ${mentionedMember}*`);
      } else {
        message.inlineReply("**Mentioned user is not muted.**")
      }
    } else {
      message.inlineReply("**Couldn't find mentioned user.**");
    }
  } 
}