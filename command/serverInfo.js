const { MessageEmbed } = require("discord.js");

module.exports = (bot, aliases) => {
  bot.on("message", async (message) => {
    let cont = message.content.slice(aliases.length).split(" ");
    switch (cont[0]) {
      case "sinfo":
        const d = new Date(message.guild.createdTimestamp);
        let day;
        let month;

        if (d.getDate() < 10) {
          day = `0${d.getDate()}`;
        } else {
          day = d.getDate();
        }

        if (d.getMonth() + 1 < 10) {
          month = `0${d.getMonth() + 1}`;
        } else {
          month = d.getMonth();
        }

        const Embed = new MessageEmbed()
          .setTitle(message.guild.name)
          .setThumbnail(message.guild.iconURL())
          .addField("Owner", `<@${message.guild.ownerID}>`, true)
          .addField("Region", message.guild.region, true)
          .addField("Members", message.guild.memberCount, true)
          .addField("Highest Role", message.guild.roles.highest, true)
          .setFooter(
            `ID: ${
              message.guild.id
            } | Server Created • ${day}/${month}/${d.getFullYear()}`
          );

        message.channel.send(Embed);
        break;
    }
  });
};
