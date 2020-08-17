const { MessageEmbed } = require("discord.js");
module.exports = (bot, aliases) => {
  bot.on("message", async (message) => {
    if (message.content === aliases + "pingmk") {
      const ping = new MessageEmbed()
        .setDescription(`🏓\`${bot.ws.ping}\`ms`);
        message.channel.send(ping);
    }
  });
};
