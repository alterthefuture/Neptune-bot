const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class HotrateCommand extends BaseCommand {
  constructor() {
    super('hotrate', 'moderation', []);
  }

  async run(client, message, args) {
    const percentage = Math.floor(Math.random() * 100);
    
    const mentionedMember = message.mentions.members.first();

    if(!args[0]) return message.inlineReply(`*You are ${percentage}% hot.*`);

    message.inlineReply(`*${mentionedMember} is ${percentage}% hot.*`)
  } 
}
