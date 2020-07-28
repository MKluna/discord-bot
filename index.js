
const {Client} = require('discord.js');
const client = new Client();
const botConfig = require('./config/botConfig.json');
const alarma = require('./command/criptocurren')
client.login(botConfig.token);

client.on("ready", () => {
    console.log(`¡The bot is ready to be used!`);
    client.user.setStatus("online");
    client.user
      .setActivity("-helpbot", {type: "LISTENING"})
      .then((presence) => console.log(`Activity set to ${presence.activities[0].name}`))
      .catch(console.error);

    // CriptoCurrent
      alarma(client,botConfig.prefixCript);

});