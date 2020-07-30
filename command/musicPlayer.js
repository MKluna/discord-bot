const { MessageEmbed } = require("discord.js");
const { prefix, YOUTUBE_API } = require("../config/botConfig.json");
const ytdl = require("ytdl-core");
const search = require("youtube-search");

module.exports = (bot, aliases) => {
  var servers = {};
  var opts = {
    maxResults: 1,
    key: YOUTUBE_API,
    type: "video",
  };
  bot.on("message", async (message) => {
    let cont = message.content.slice(prefix.length).split(" ");
    let args = cont.slice(1);
    switch (cont[0]) {
      case "playmk":
        function play(connection, message) {
          var server = servers[message.guild.id];
          if (!server.queue[1]) {
            server.dispatcher = connection.play(
              ytdl(server.queue[0], {
                filter: "audio",
              })
            );
          }
          server.dispatcher.on("finish", function () {
            server.queue.shift();
            if (server.queue[0]) {
              play(connection, message);
            } else {
              server.queue.push(cont[1]);
            }
          });
        }

        if (!cont[1]) {
          message.channel.send("You need to provide link! 🤔");
          return;
        }
        if (!message.member.voice.channel) {
          message.channel.send("you must be in a channel to play the bot 🤨");
          return;
        }
        // Here evaluate if you enter a youtube link
        if (message.content.includes("youtube.com")) {
          if (!servers[message.guild.id])
            servers[message.guild.id] = {
              queue: [],
            };
          var server = servers[message.guild.id];
          server.queue.push(cont[1]);
          if (!message.member.voice.connection)
            message.member.voice.channel.join().then(function (connection) {
              play(connection, message);
            });
        }
        // Otherwise it will look for what the user enters
        else {
          if (!servers[message.guild.id])
            servers[message.guild.id] = {
              queue: [],
            };

          var server = servers[message.guild.id];

          search(message.content.replace("-playmk", ""), opts, function (
            err,
            results
          ) {
            if (err)
              return message.channel.send(
                "A problem has occurred " + err.message
              );
            if (!message.member.voice.connection)
              message.member.voice.channel.join().then(function (connection) {
                play(connection, message);
              });
            const embed = new MessageEmbed()
              .setTitle(`${results[0].title}`)
              .setColor([255, 140, 0])
              .setDescription(
                `
            ${results[0].link}
            ${results[0].description}`
              )
              .setImage(`${results[0].thumbnails.medium.url}`);
            message.channel.send(embed);
            return server.queue.push(results[0].link);
          });
        }
        break;
      case "skipmk":
        var server = servers[message.guild.id];
        if (server) {
          if (server.dispatcher) server.dispatcher.end()
          message.channel.send("Skipping the song ⏩");
        }
        else{
          message.channel.send("No exist queue")
        }
        break;
      case "stopmk":
        var server = servers[message.guild.id];
        if (message.guild.voice.connection) {
          for (var i = server.queue.length - 1; i >= 0; i--) {
            server.queue.splice(i, 1);
          }
          server.dispatcher.end();
          message.channel.send("Ending queue leaving the voice channel! 💤");
        }
        if (message.guild.connection)
          message.guild.voice.connection.disconnect();
      default:
        break;
    }
  });
};
