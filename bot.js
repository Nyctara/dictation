const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const config = require("./config.json");

client.on("ready", () => {
  client.user.setGame(`on ${client.guilds.size} servers`);
  console.log(`Ready to serve Cloud18! It has ${client.users.size} users.`);
   client.on("error", (e) => console.error(e));
  client.on("warn", (e) => console.warn(e));
  client.on("debug", (e) => console.info(e));
});

 

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;


  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});


client.login(config.token);