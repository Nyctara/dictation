  exports.run = (client, message, args) => {
    let kimJong = message.guild.roles.find("name", "kimJong");
    if(!message.member.roles.has(modRole.id)) {
        return message.reply("How Dare You Try To Use This Command! I'll Publicly Execute You!")
    }
if(message.mentions.users.size === 0) {
    return message.reply("Mention A User");
}
let kickMember = message.guild.member(message.mentions.users.first());
if(!kickMember) {
    return message.reply("Invalid User");
}
if(message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
    return message.reply("I don't have permission, update my role and try again.");
}
kickMember.kick();