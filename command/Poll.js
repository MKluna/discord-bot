const { MessageEmbed, MessageReaction } = require("discord.js");

module.exports = (bot, aliases) => {
  bot.on("message", async (message) => {
    let cont = message.content.slice(aliases.length).split(" ");
    switch (cont[0]) {
      case "poll":
        const embed = new MessageEmbed()
          .setColor(0xffc300)
          .setTitle("Initiate Poll")
          .setDescription("-poll to initiate a simple yes or no poll");
        if (!cont[1]) {
          message.channel.send(embed);
          break;
        }
        let msgArgs = cont.slice(1).join(" ");
        message.channel.send(msgArgs).then((MessageReaction) => {
          MessageReaction.react("👍");
          MessageReaction.react("👎");
        });
      break;

      default:
        break;
    }
  });
};

