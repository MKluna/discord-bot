const { MessageEmbed } = require("discord.js");
module.exports = (bot, aliases) => {
  bot.on("message", async (message) => {
    if (message.content === aliases + "helpbot") {
      const embed = new MessageEmbed()
        .setTitle("Welcome to MK-bot, thanks for using me")
        .setColor([255, 140, 0]).setDescription(`
            📜Command list:
            "-sg: You can find a gif🔎"
            "-pg: Delete the amount of selected messages❌" 
            "-playmk: Play music💫"
            "-skipmk: Play the next song in the queue ⏩🎵"
            "-stopmk: Queue ends 💤"
            `);
      message.channel.send(embed);
    }
  });
};
