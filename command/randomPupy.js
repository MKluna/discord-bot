const { MessageEmbed } = require("discord.js");
const { prefix } = require("../config/botConfig.json");
const randomPuppy = require("random-puppy");

module.exports = (bot, aliases) => {
  bot.on("message", async (message) => {
    if (message.content === prefix + "pet") {
      randomPuppy()
      .then(url => {
        const pupetEmbed = new MessageEmbed()
        .setColor("RANDOM")
        .setImage(url)
        .setTitle(`Your random puppy.`);
      message.channel.send(pupetEmbed);
      })
    }
  });
}