const { Client } = require("discord.js");
const client = new Client();
const botConfig = require("./config/botConfig.json");
const alarma = require("./command/criptocurren");
const helpbot = require("./command/helpbot");
const searchGif = require("./command/searchGifs");
const deleteMessages = require('./command/deleteMessages');
const {prefix,prefixCript} = require('./config/botConfig.json');

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
  alarma(client,prefixCript);
  //helpbot
  helpbot(client,prefix);
  //searchGif
  searchGif(client,prefix)
  //deleted Messages
  deleteMessages(client,prefix)
});
