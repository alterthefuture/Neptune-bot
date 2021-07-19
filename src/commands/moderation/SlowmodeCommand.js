const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class SlowmodeCommand extends BaseCommand {
  constructor() {
    super('slowmode', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.inlineReply("**You are missing the permission:** `manage_channels`");
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.inlineReply("**I'm missing the permission:** `manage_channels`");

    const value = Number(args[0]);

    if(!args[0]) return message.inlineReply("**Please enter a amount of seconds.**");
    if(value > 120) return message.inlineReply("**Amount can't be over 120 seconds.**");

    try{
      if(value == 0){
        await message.channel.setRateLimitPerUser(value);
        message.channel.send("*I have turned slowmode off.*");
      } else {
        if(value == 1){
          await message.channel.setRateLimitPerUser(value);
          message.channel.send(`*Set channel delay to ${value} second.*`);
        } else {
          await message.channel.setRateLimitPerUser(value);
          message.channel.send(`*Set channel delay to ${value} seconds.*`);
        }
      } 
    } catch(err){
      message.inlineReply("**Failed to enable slowmode.**");
    }
  } 
}