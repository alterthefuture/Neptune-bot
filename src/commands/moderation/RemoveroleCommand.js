const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RemoveroleCommand extends BaseCommand {
  constructor() {
    super('drole', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.inlineReply("**You are missing the permission:** `manage_manage_roles`");
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.inlineReply("**I'm missing the permission:** `manage_manage_roles`");

  const mentionedMember = message.mentions.members.first() || message.guild.member.cache.get(args[0]);
  const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

  if(!args[0]) return message.inlineReply('**Please mention a user to role.**');
  if(!mentionedMember) return message.inlineReply("**Couldn't find mentioned user.**");
  if(mentionedMember.roles.highest.position >= message.member.roles.highest.position) return message.inlineReply("**Can't remove roles to a member higher than you.**");
  if(!args[1]) return message.inlineReply("**Please specify a role.**");
  if(!role) return message.inlineReply("**Role doesn not exist.**");
  if(message.member.roles.highest.position <= role.position) return message.inlineReply("**Can't remove roles higher than you.**");

  try{
    await mentionedMember.roles.remove(role.id)
    message.channel.send(`*Successfully removed ${role} from ${mentionedMember}*`);
  } catch(err){
    message.inlineReply("**Couldn't remove roles to that user.**");
  }
  } 
} 