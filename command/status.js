const request = require("request");
module.exports = (bot, aliases) => {
  bot.on("message", async (message) => {
    let cont = message.content.slice(aliases.length).split(" ");
    if (message.content.includes(aliases + "status")) {
        const content = message.content.replace(`${aliases}status`,'');
        bot.user.setPresence({
           activity:{
              name:content,
              type:0,
           }
        })
    }
  });
};
