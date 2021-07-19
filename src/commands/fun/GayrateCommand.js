const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class GayrateCommand extends BaseCommand {
  constructor() {
    super('gayrate', 'fun', []);
  }

  async run(client, message, args) {
    const percentage = Math.floor(Math.random() * 100);
    
    const mentionedMember = message.mentions.members.first();

    if(!args[0]) return message.inlineReply(`*You are ${percentage}% gay.*`);

    message.inlineReply(`*${mentionedMember} is ${percentage}% gay.*`)
  } 
}
