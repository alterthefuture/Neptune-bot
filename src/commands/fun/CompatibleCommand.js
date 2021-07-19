const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class CompatibleCommand extends BaseCommand {
  constructor() {
    super('compatible', 'fun', []);
  }

  async run(client, message, args) {
    const percentage = Math.floor(Math.random() * 100);
    
    const mentionedMember = message.mentions.members.first();

    if(!args[0]) return message.inlineReply("**Please mention a user.**");

    message.inlineReply(`*You and ${mentionedMember} are ${percentage}% compatible.*`)
  } 
}
