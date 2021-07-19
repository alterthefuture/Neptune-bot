const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'help', []);
  }

  async run(client, message, args) {
    const sectionEmbed = new Discord.MessageEmbed()
      .setTitle("Neptune Help Menu")
      .setDescription("Below are all the commands type `n!help [catagory]` to get started.")
      .addField('**Information**','Displays Information Commands.')
      .addField('**Moderation**','Displays Moderation Commands.')
      .addField('**Fun**','Displays Fun Commands.')
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`,message.author.displayAvatarURL())
      .setThumbnail("https://cdn.discordapp.com/attachments/863200845688733736/864309129699131392/a11575c73947cb6aebb2ba0837f46457.jpg")
      .setColor("#191970");

    const moderationEmbed = new Discord.MessageEmbed()
      .setTitle("Neptune Moderation Commands")
      .setDescription("Commands with () are optional and [] is required.")
      .addField('**kick**','Description: Kicks mentioned user.\nUsage: `n!kick [@user] (reason)`')
      .addField('**ban**','Description: Bans mentioned user.\nUsage: `n!!ban [@user] (reason)`')
      .addField('**unban**','Description: Unbans user from server.\nUsage: `n!unban [ID]`')
      .addField('**lock**','Description:  Locks mentioned channel.\nUsage: `n!lock (channel)`')
      .addField('**unlock**','Description: Unlocks mentioned channel.\nUsage: `n!unlock (channel)`')
      .addField('**purge**','Description: Purges entered amount of messages.\nUsage: `n!purge [amount]`')
      .addField('**nuke**','Description: Deletes channel and clones it.\nUsage: `n!nuke`')
      .addField('**mute**','Description: Mutes mentioned user.\nUsage: `n!mute [@user]`')
      .addField('**unmute**','Description: Umutes mentioned user.\nUsage: `n!unmute [@user]`')
      .addField('**setup**','Description: Creates and setups mute role across all channels.\nUsage: `n!setup`')
      .addField('**role**','Description: Add roles to mentioned user.\nUsage: `n!role [@user] [role ID]`')
      .addField('**drole**','Description: Removes roles from mentioned user.\nUsage: `n!drole [@user] [role ID]`')
      .addField('**slowmode**','Description: Sets a slowmode for the channel.\nUsage: `n!slowmode [seconds]`')
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`,message.author.displayAvatarURL())
      .setThumbnail("https://cdn.discordapp.com/attachments/863200845688733736/864309129699131392/a11575c73947cb6aebb2ba0837f46457.jpg")
      .setColor("#191970");

    const funEmbed = new Discord.MessageEmbed()
      .setTitle("Neptune Fun Commands")
      .setDescription("Commands with () are optional and [] is required.")
      .addField('**coinflip**','Description: Flips a coin for heads or tails.\nUsage: `n!coinflip`')
      .addField('**gayrate**','Gayrates mentioned user.\nUsage: `n!gayrate (@user)`')
      .addField('**simprate**','Simprates mentioned user.\nUsage: `n!simprate (@user)`')
      .addField('**hotrate**','Hotrates mentioned user.\nUsage: `n!hotrate (@user)`')
      .addField('**compatible**','Checks compatibilty between you and a user.\nUsage: `n!compatible [@user]`')
      .addField('**8ball**','Ask 8ball a question.\nUsage: `n!8ball [question]`')
      .setColor("#191970")
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`,message.author.displayAvatarURL())
      .setThumbnail("https://cdn.discordapp.com/attachments/863200845688733736/864309129699131392/a11575c73947cb6aebb2ba0837f46457.jpg")

      const infoEmbed = new Discord.MessageEmbed()
      .setTitle("Neptune Information Commands")
      .setDescription("Commands with () are optional and [] is required.")
      .addField('**avatar**','Description: Shows the mentioned users avatar.\nUsage: `n!avatar (@member)`')
      .addField('**botinfo**','Description: Shows information about the bot.\nUsage: `n!botinfo`')
      .setColor("#191970")
      .setTimestamp()
      .setFooter(`Requested by ${message.author.tag}`,message.author.displayAvatarURL())
      .setThumbnail("https://cdn.discordapp.com/attachments/863200845688733736/864309129699131392/a11575c73947cb6aebb2ba0837f46457.jpg")

    if(!args[0]) return message.channel.send(sectionEmbed);
    if (args[0] == 'moderation' || args[0] == 'mod' || args[0] == 'Mod' || args[0] == 'Moderation') return message.channel.send(moderationEmbed);
    else if(args[0] == 'fun' || args[0] == "Fun") return message.channel.send(funEmbed);
    else if(args[0] == 'info' || args[0] == "Info" || args[0] == "Information" || args[0] == "information") return message.channel.send(infoEmbed)
  } 
}