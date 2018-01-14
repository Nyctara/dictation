const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  client.user.setGame(`<>help`);
  console.log(`Ready to serve the public!.... Soon enough. Used by ${client.users.size} users.`);
});

  client.on("error", (e) => console.error(e));
  client.on("warn", (e) => console.warn(e));
  client.on("debug", (e) => console.info(e));