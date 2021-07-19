const { MessageMentions } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class MuteCommand extends BaseCommand {
  constructor() {
    super('mute', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.inlineReply("**You are missing the permission:** `manage_roles`");
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.inlineReply("**I'm missing the permission:** `manage_roles`");

    const mentionedMember = message.mentions.members.first();

    if(mentionedMember.id == client.user.id) return message.inlineReply("**You can't mute the bot.**")
    if(mentionedMember.id == message.author.id) return message.inlineReply("**You can't mute yourself.**")
    if(!args[0]) return message.inlineReply("**Please mention a user to mute.**")
    
    if(mentionedMember){
      let muteRole = message.guild.roles.cache.find(role => role.name == 'Muted');
      
      if(mentionedMember.roles.cache.some(r => r.name == "Muted")) {
        message.inlineReply("**Mentioned user is already muted.**")
      } else {
        if(!muteRole){
          message.inlineReply("**No mute role found, attempting to create one.**")
          try {
            muteRole = await message.guild.roles.create({
              data: {
                name: "Muted",
                color: "#000000",
                permissions: []
              }
            });
            message.guild.channels.cache.forEach(async (channel, id) => {
              await channel.createOverwrite(muteRole, {
                SEND_MESSAGES: false
              });
            });
          } catch(err){
            message.inlineReply("**Failed to setup muted role.**")
          }
        }
        let memberTarget = message.guild.members.cache.get(mentionedMember.id)

        await memberTarget.roles.add(muteRole.id)
  
        message.inlineReply(`*Successfully muted ${mentionedMember}*`)
      }
    } else{
      message.inlineReply("**Couldn't find mentioned user.**")
    }
  } 
}