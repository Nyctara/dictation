exports.run = (client, message, args) => {
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
  .setTitle("Information")
  .setAuthor(client.user.username, client.user.avatarURL)
 
  .setColor(0x00AE86)
  .setDescription("Here's Some Info!")
  .setFooter("Dictation ©", "https://i.imgur.com/BoehaCH.jpg")
  .setThumbnail("https://i.imgur.com/TY2SyE7.png")

  .setTimestamp()
  .setURL("https://discord.gg/BjWyVeA")
  .addField("Server",
    "https://discord.gg/BjWyVeA")

  .addField("Version", "Alpha 1.2", true)

  .addField("Additional Info", "Prefix: <> \n Creator: be my gf pls#9278 \n Description: This bot is in development.... like.... very early alpha", true);

 message.channel.send({embed});
}