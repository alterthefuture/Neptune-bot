const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SimprateCommand extends BaseCommand {
  constructor() {
    super('simprate', 'fun', []);
  }

  async run(client, message, args) {
    const percentage = Math.floor(Math.random() * 100);
    
    const mentionedMember = message.mentions.members.first();

    if(!args[0]) return message.inlineReply(`*You are ${percentage}% simp.*`);

    message.inlineReply(`*${mentionedMember} is ${percentage}% simp.*`)
  } 
}
