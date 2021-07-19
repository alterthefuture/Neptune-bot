const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RoleCommand extends BaseCommand {
  constructor() {
    super('role', 'moderation', []);
  }

  async run(client, message, args) {
    if(!message.member.hasPermission("MANAGE_ROLES")) return message.inlineReply("**You are missing the permission:** `manage_roles`");
    if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.inlineReply("**I'm missing the permission:** `manage_roles`");

  const mentionedMember = message.mentions.members.first() || message.guild.member.cache.get(args[0]);
  const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[1]);

  if(!args[0]) return message.inlineReply('**Please mention a user to role.**');
  if(!mentionedMember) return message.inlineReply("**Couldn't find mentioned user.**");
  if(mentionedMember.roles.highest.position >= message.member.roles.highest.position) return message.inlineReply("**Can't add roles to a member higher than you.**");
  if(!args[1]) return message.inlineReply("**Please specify a role.**");
  if(!role) return message.inlineReply("**Role does not not exist.**");
  if(message.member.roles.highest.position <= role.position) return message.inlineReply("**Can't add roles higher than you.**");

  try{
    await mentionedMember.roles.add(role.id)
    message.channel.send(`*Successfully given ${mentionedMember} the role: ${role}*`);
  } catch(err){
    message.inlineReply("**Couldn't add roles to that user.**");
  }
  } 
} 