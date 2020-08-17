const { MessageEmbed } = require("discord.js");
module.exports = (bot, aliases) => {
  bot.on("message", async (message) => {
    let cont = message.content.slice(aliases.length).split(" ");
    let args = cont.slice(1);
    if (message.content.includes(aliases + "pg")) {
      if (!message.member.hasPermission("MANAGE_MESSAGES"))
        return message.reply("You cannot clear messages!");
      if (message.channel.name !== "test")
        return message.reply("You can't delete the messages from here");
      if (!args[0])
        return message.reply(
          "You need to add a number of messages that you want to delete"
        );
      let number = args[0];
      if (isNaN(number))
        return message.reply("You need to put a number not a letter");
      number = parseInt(number);
      if (number >= 100 || number <= 0) return message.reply("Invalid values");
      message.channel
        .bulkDelete(number + 1)
        .then(() => {
          return message.reply(
            `Congratulations you deleted ${number} messages`
          );
        })
        .catch((err) => {
          message.channel.send(`An error has occurred: ${err.message}`);
        });
    }
  });
};
