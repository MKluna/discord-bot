const { MessageEmbed } = require("discord.js");
const { prefix } = require("../config/botConfig.json");

module.exports = (bot, aliases) => {
  bot.on("message", async (message) => {
    if (message.content === prefix + "pingmk") {
      const ping = new MessageEmbed()
        .setDescription(`🏓\`${bot.ws.ping}\`ms`);
        message.channel.send(ping);
    }
  });
};
