const request = require("request");
const { prefix,GIPHY_API } = require("../config/botConfig.json");
module.exports = (bot, aliases) => {
  bot.on("message", async (message) => {
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    if (message.content.includes(prefix + "sg")) {
      if (!cont[1]) {
        message.channel.send("You need to provide something to search! 🤔");
        return;
      }
      const Received = message.content;
      const Search = Received.replace("-sg", "");
      const urlS = `https://api.giphy.com/v1/gifs/search?api_key=${GIPHY_API}&q=${Search}&limit=25&offset=0&rating=g&lang=es`;
      request(
        {
          url: urlS,
          json: true,
        },
        (error, response, body) => {
          const result = body.data[0].images.original.url;
          message.channel.send(`${result}`);
        }
      );
    }
  });
};
