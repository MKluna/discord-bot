const { Client } = require("discord.js");
const client = new Client();
const botConfig = require("./config/botConfig.json");
const CriptoCurrent = require("./command/criptocurren");
const helpbot = require("./command/helpbot");
const searchGif = require("./command/searchGifs");
const deleteMessages = require("./command/deleteMessages");
const status = require("./command/status");
const weatherFinder = require("./command/weatherFinder");
const musicPlayer = require("./command/musicPlayer");
const poll = require("./command/Poll");
const randomPuppy = require('./command/randomPupy');
const covid = require('./command/covid');
const { prefix, prefixCript } = require("./config/botConfig.json");

client.login(botConfig.token);

client.on("ready", () => {
  console.log(`¡The bot is ready to be used!`);
  client.user.setStatus("online");
  client.user
    .setActivity("-helpbot", { type: "LISTENING" })
    .then((presence) =>
      console.log(`Activity set to ${presence.activities[0].name}`)
    )
    .catch(console.error);

  // CriptoCurrent
  CriptoCurrent(client, prefixCript);
  //helpbot
  helpbot(client, prefix);
  //searchGif
  searchGif(client, prefix);
  //deleted Messages
  deleteMessages(client, prefix);
  //-status
  status(client, prefix);
  //weather Finder
  weatherFinder(client, prefix);
  //musicPlayer
  musicPlayer(client, prefix);
  //Poll
  poll(client, prefix);
  //randomPuppy
  randomPuppy(client, prefix);
  //covid
  covid(client,prefix);
});
