const moment = require("moment");

exports.run = (client, msg, [interval, period]) => {
  const timer = moment.duration(parseInt(interval, 10), period).asMilliseconds();
  console.log(timer);
  client.destroy();
  setTimeout(()=>{
    process.exit(1);
  }, timer);
};