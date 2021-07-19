const { MessageMentions } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SetupCommand extends BaseCommand {
  constructor() {
    super('setup', 'moderation', []);
  }

  async run(client, message) {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.inlineReply("**You are missing the permission:** `manage_channels`");
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.inlineReply("**I'm missing the permission:** `manage_channels`");
    
    let muteRole = message.guild.roles.cache.find(role => role.name == 'Muted');

    if(!muteRole) {
      try {
        
        muteRole = await message.guild.roles.create({
          data: {
            name: "Muted",
            color: "#000000",
            permissions: []
          }
        });
        message.inlineReply("*Successfully setup muted role.*")
        message.guild.channels.cache.forEach(async (channel, id) => {
          await channel.createOverwrite(muteRole, {
            SEND_MESSAGES: false
          });
        });
      } catch(err){
        message.inlineReply("**Failed to setup muted role.**")
      }
    } else {
      message.inlineReply("**Mute rule already exist.**")
    }
  } 
}