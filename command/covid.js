const { MessageEmbed } = require("discord.js");
const { prefix } = require("../config/botConfig.json");
const api = require("novelcovid");
api.settings({ baseUrl: "https://disease.sh" });

module.exports = (bot, aliases) => {
  bot.on("message", async (message) => {
    let cont = message.content.slice(prefix.length).split(" ");
    const Received = message.content;
    const Search = Received.replace("-covid ", "");
    switch (cont[0]) {
      case "covid":
        if (!cont[1]) {
          message.channel.send("You need to provide something to search! 🤔");
          return;
        }
        api.countries({ country: Search }).then((corona) => {
          if (corona.message) {
            return message.channel.send(corona.message);
          }
          const embed = new MessageEmbed()
            .setTitle(corona.country)
            .setDescription(`Info on COVID-19`)
            .addField("Total Confirmed", corona.cases, true)
            .addField("Total Deaths", corona.deaths, true)
            .addField("Total Recovered", corona.recovered, true)
            .addField("Today's cases", corona.todayCases, true)
            .addField("Today's deaths", corona.todayDeaths, true)
            .addField("Active cases", corona.active, true)
            .addField("Critical cases", corona.critical, true)
            .setThumbnail(corona.countryInfo.flag);
          message.channel.send(embed);
        });
        break;
    }
  });
};
