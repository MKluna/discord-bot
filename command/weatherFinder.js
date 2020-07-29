const { MessageEmbed } = require("discord.js");
const { prefix,OPEN_WEATHER } = require("../config/botConfig.json");
const request = require("request");

module.exports = (bot, aliases) => {
  bot.on("message", async (message) => {
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    if (message.content.includes(prefix + "sw")) {
      if (!cont[1]) {
        message.channel.send("You need to provide something to search! 🤔");
        return;
      }
      const Received = message.content;
      const Search = Received.replace("-sw ", "");
      const urlSW = `http://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER}&q=${Search}&units=metric`;

      request(
        {
          url: urlSW,
          json: true,
        },
        (error, response, body) => {
          if (error) return message.channel.send("No results found");
          if (body.message === "city not found")
            return message.channel.send("No results found");
          const cod = body.weather[0].icon;
          const embed = new MessageEmbed().setTitle(`${body.name} 
${body.weather[0].main}
          `).setDescription(`${body.weather[0].description}
        Temperature : ${body.main.temp}
        Thermal sensation : ${body.main.feels_like}
        The maximum temperature : ${body.main.temp_max}
        Minimum temperature : ${body.main.temp_min}
        Humidity : ${body.main.humidity}%
        `);
          if (cod === "01d") {
            message.channel.send(
              embed
                .setThumbnail(
                  "https://i.dlpng.com/static/png/6521359_preview.png"
                )
                .setImage(
                  "https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
                )
            );
          }
          if (cod === "02d") {
            message.channel.send(
              embed
                .setThumbnail(
                  "https://cdn0.iconfinder.com/data/icons/weather-forecast-9/100/WeatherIcons-IF-20-512.png"
                )
                .setImage(
                  "https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
                )
            );
          }
          if (cod === "03d") {
            message.channel.send(
              embed
                .setThumbnail(
                  "https://cdn2.iconfinder.com/data/icons/weather-icons-16/72/weather_149-256.png"
                )
                .setImage(
                  "https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
                )
            );
          }
          if (cod === "04d") {
            message.channel.send(
              embed
                .setThumbnail(
                  "https://cdn3.iconfinder.com/data/icons/weather-16/256/Overcast-256.png"
                )
                .setImage(
                  "https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
                )
            );
          }
          if (cod === "09d") {
            message.channel.send(
              embed
                .setThumbnail(
                  "https://cdn4.iconfinder.com/data/icons/smoothfill-weather/30/weather_029-shower-cloud-rain-forecast-256.png"
                )
                .setImage(
                  "https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
                )
            );
          }
          if (cod === "010d") {
            message.channel.send(
              embed
                .setThumbnail(
                  "https://cdn4.iconfinder.com/data/icons/autumn-2047/520/133_Autumn_Cloud_Rain-256.png"
                )
                .setImage(
                  "https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
                )
            );
          }
          if (cod === "011d") {
            message.channel.send(
              embed
                .setThumbnail(
                  "https://cdn2.iconfinder.com/data/icons/weather-glyph-8/64/37-256.png"
                )
                .setImage(
                  "https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
                )
            );
          }
          if (cod === "013d") {
            message.channel.send(
              embed
                .setThumbnail(
                  "https://cdn4.iconfinder.com/data/icons/vectory-weather-1/40/snowflake-256.png"
                )
                .setImage(
                  "https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
                )
            );
          }
          if (cod === "050d") {
            message.channel.send(
              embed
                .setThumbnail(
                  "https://cdn0.iconfinder.com/data/icons/weather-350/64/fog-weather-mist-256.png"
                )
                .setImage(
                  "https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png"
                )
            );
          }
        }
      );
    }
  });
};
