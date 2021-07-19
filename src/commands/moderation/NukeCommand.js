const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');
const { APIMessage, Structures } = require("discord.js");

module.exports = class NukeCommand extends BaseCommand {
  constructor() {
    super('nuke', 'moderation', []);
  }

  async run(client, message) {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.inlineReply("**You are missing the permission:** `manage_channels`");
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.inlineReply("**I'm missing the permission:** `manage_channels`");

    const channel = message.channel;
    const posis = channel.position;
    const nukeEmbed = new Discord.MessageEmbed()
      .setAuthor("Successfully Nuked")
      .setFooter(`Requested by ${message.author.tag}`,message.author.displayAvatarURL())
      .setTimestamp()
      .setImage("https://media.discordapp.net/attachments/720812237794574347/765218830418182204/200.gif?width=269&height=150")
      .setColor("#191970");

    try{
      channel.clone().then((channel2) => {
        channel2.setPosition(posis);
        channel.delete();
        channel2.send(nukeEmbed);
      })
    } catch(err){
      message.inlineReply("**Failed to delete channel.**");
    }
  } 
}