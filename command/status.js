const request = require("request");
const { prefix } = require("../config/botConfig.json");
module.exports = (bot, aliases) => {
  bot.on("message", async (message) => {
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    if (message.content.includes(prefix + "status")) {
        const content = message.content.replace(`${prefix}status`,'');
        bot.user.setPresence({
           activity:{
              name:content,
              type:0,
           }
        })
    }
  });
};
