const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class PurgeCommand extends BaseCommand {
  constructor() {
    super('purge', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.inlineReply("**You are missing the permission:** `manage_messages`");
    if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.inlineReply("**I'm missing the permission:** `manage_messages`");
    if(!args[0]) return message.inlineReply("**Please state a amount of messages to purge.**");

    const amountToDelete = Number(args[0], 10);

    if(isNaN(amountToDelete)) return message.inlineReply("**Number stated is not a valid number.**");

    const fetched = await message.channel.messages.fetch({
      limit: amountToDelete
    });

    try{
      await message.channel.bulkDelete(fetched);
    } catch(err){
      message.inlineReply("**Failed to purge messages.**");
    }
  } 
}