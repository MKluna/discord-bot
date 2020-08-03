const { prefix } = require("../config/botConfig.json");
const { MessageEmbed } = require("discord.js");
const math = require('mathjs');

module.exports = (bot, aliases) => {
  bot.on("message", async (message) => {
    let cont = message.content.slice(prefix.length).split(" ");
    const Received = message.content;
    const args = Received.replace("-calculator ", "");
    let resp;
    switch (cont[0]) {
      case "calculator":
        if(!cont[1]) return message.channel.send('Please provide a question');
        try {
          resp = math.evaluate(args)
      } catch (e) {
          return message.channel.send('Please provide a **valid** question')
      }
      const embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Calculator')
        .addField('Question', `\`\`\`css\n${args}\`\`\``)
        .addField('Answer', `\`\`\`css\n${resp}\`\`\``)
        message.channel.send(embed);
      break;
      default:
        break;
    }
  });
};

