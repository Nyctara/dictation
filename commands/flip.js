  exports.run = (client, message, args) => {
var flip = Math.floor(Math.random() * 2 + 1);
		if (flip === 1) {
			console.log("Tails");
			message.reply("tails!");
		}
		else {
			console.log("Heads");
			message.reply("heads!");
		}
	}