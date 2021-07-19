const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class AvatarCommand extends BaseCommand {
  constructor() {
    super('avatar', 'information', []);
  }

  async run(client, message, args) {
    let mentionedMember = message.mentions.members.first();

    if(!mentionedMember) {
      const avatarEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.tag}'s Avatar`)
        .setTimestamp()
        .setImage(message.author.displayAvatarURL())
        .setFooter(`Requested by ${message.author.tag}`,message.author.displayAvatarURL())
        .setColor("#191970");
      message.channel.send(avatarEmbed)
    } else{
      const avatarEmbed = new Discord.MessageEmbed()
        .setTitle(`${mentionedMember.user.tag}'s Avatar`)
        .setTimestamp()
        .setImage(mentionedMember.user.displayAvatarURL())
        .setFooter(`Requested by ${message.author.tag}`,message.author.displayAvatarURL())
        .setColor("#191970");
      message.channel.send(avatarEmbed)
    }
    
  } 
}
