exports.run = async (client, msg, args) => {
  if(!args[0] && !msg.flags.length) msg.flags.push("list");

  if(!msg.flags.length) {
    const [name, ...message] = args;
    if(!this.db.has(name)) return client.answer(msg, `The tag \`${name}\` does not exist. Use \`${client.config.prefix}tags -help\` for help.`, {deleteAfter:true});
    const tag = this.db.get(name).contents;
    return client.answer(msg, `${message.join(" ")}${tag}`);
  }

  const [name, ...extra] = args;
  
  let data = null;
  switch(msg.flags[0]) {
    case ("add") :
      data = {contents: extra.join(" ")};
      break;
    default :
      data = extra.join(" ");
  }

  try {
    const response = await this.db[msg.flags[0]](name, data);
    const deleteAfter = msg.flags[0] == "list" ? false : true;
    client.answer(msg, response, {deleteAfter});
  } catch (e) {
    if(e.constructor.name === "TypeError") e = e.message;
    client.answer(msg, e, {deleteAfter: false, delay: 5000});
  }
};