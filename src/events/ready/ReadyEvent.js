const BaseEvent = require('../../utils/structures/BaseEvent');

module.exports = class ReadyEvent extends BaseEvent {
  constructor() {
    super('ready');
  }
  async run (client) {
    let serverIn = await client.guilds.cache.size;
    let memberIn = await client.guilds.cache.reduce((a, g) => a + g.memberCount, 0);
    console.log('Bot is ready.');
    client.user.setPresence({
      activity: {
        name: `${serverIn} servers ${memberIn} members! `,
        type: "WATCHING"
      },
      status: 'online'
    })
  }
}