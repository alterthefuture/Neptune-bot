const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')

module.exports = class BotinfoCommand extends BaseCommand {
  constructor() {
    super('botinfo', 'information', []);
  }

  async run(client, message) {
    let serverIn = await client.guilds.cache.size;
    let memberIn = await client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
    const botinfoEmbed = new Discord.MessageEmbed()
    .setTitle('Neptune Bot Information')
    .addFields(
      { name: 'Developers', value: 'ritz#8888, myst#0001' },
      { name: 'Date of Creation', value: "7/11/21"},
      { name: `Language`, value: "Discord.js V12"},
      { name: 'Bots Ping', value: `${Math.round(client.ws.ping)}`},
      { name: 'Servers', value: `${serverIn}`, inline: true },
      { name: 'Members', value: `${memberIn}`, inline: true }
    )
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`,message.author.displayAvatarURL())
    .setThumbnail("https://cdn.discordapp.com/attachments/863200845688733736/864309129699131392/a11575c73947cb6aebb2ba0837f46457.jpg")
    .setColor("#191970");

    message.channel.send(botinfoEmbed)
  } 
}
