const figlet = require('figlet');

module.exports = (bot, aliases) => {
  bot.on("message", async (message) => {
    let cont = message.content.slice(aliases.length).split(" ");
    const Received = message.content;
    const Text = Received.replace("-ascii ", "");
    switch (cont[0]) {
      case "ascii":
        if (!cont[1]) {message.channel.send("Please provide some text");return;}
        figlet(Text, function(err, data) {
          if (err) {
              message.channel.send('Something went wrong...');
              return;
          }
          if(data.length > 2000) return message.channel.send('Please provide text shorter than 2000 characters')
          message.channel.send('```' + data + '```')
      });    
      break;
      default:
        break;
    }
  });
};

