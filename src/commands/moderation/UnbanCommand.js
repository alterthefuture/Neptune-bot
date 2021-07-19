const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class UnbanCommand extends BaseCommand {
  constructor() {
    super('unban', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.inlineReply("**You are missing the permission:** `ban_members`");
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.inlineReply("**I'm missing the permission:** `ban_members`");

    const userID = args[0];
    let reason = args.slice(1).join(" ");

    if(!reason) reason == "None";
    if(!args[0]) return message.inlineReply("**Please enter a user ID to unban.**");
    if(isNaN(args[0])) return message.inlineReply("**ID stated is not a number.**");

    try{
      message.guild.fetchBans().then(async bans =>{
        if (bans.size == 0) return message.inlineReply("**User is not banned.**");
        let bUser = bans.find(b => b.user.id == userID);
        if(!bUser) return message.inlineReply("**User is not banned**");
        await message.guild.members.unban(bUser.user,reason);
        message.channel.send("*Successfully unbanned user.*");
      })
    } catch(err){
      message.inlineReply("**Couldn't unban user.**");
    }
  } 
}