exports.run = (client, message, args) => {
const Discord = require("discord.js");
const embed = new Discord.RichEmbed()
  .setTitle("Dictation Help")
  .setAuthor(client.user.username, client.user.avatarURL)
 
  .setColor(0x00AE86)
  .setDescription("I Am Your Dictator. Follow My Orders, Or I'll Publicly Execute You!")
  .setFooter("Dictation ©", "https://i.imgur.com/BoehaCH.jpg")
  .setImage("https://i.imgur.com/TY2SyE7.png")

  .setTimestamp()
  .setURL("https://discord.gg/BjWyVeA")
  .addField("Fun",
    "8ball | *Ask A Question... Get An Answer* \n embed | *Basically A Say Command Except It Sends An Embed* \n flip | *Flip A Coin* \n achievement | *Achievement Get!* \n say (not done) \n punch, slap, ect (action commands, also not done) \n Other Things (Coming)")

  .addField("Utility", "ban *Get Rid Of The Unwanted Users* \n kick *Like A Ban Except They Can Come Back* \n purge \n complain (every command here doesnt work \n Other Things (Coming)", true)

  .addField("Misc", "ping *Pong!* \n av + avatar *Sends The User's Avatar* \n Other Things (very empty bot)", true);

 message.channel.send({embed});
}