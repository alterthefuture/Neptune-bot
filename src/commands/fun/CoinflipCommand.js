const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class CoinflipCommand extends BaseCommand {
  constructor() {
    super('coinflip', 'fun', []);
  }

  async run(client, message) {
    let coinSides = ['heads','tails'];
    let side = coinSides[Math.floor(Math.random() * coinSides.length)];
    message.inlineReply(`*Coin landed on: ${side}, ${message.author}*`);
  } 
}
