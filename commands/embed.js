const Discord = require("discord.js");
exports.run = (client, msg, args) => {
  msg.delete();
  const embed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor([114, 137, 218]);
  msg.channel.send({embed});
};