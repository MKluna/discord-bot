const {MessageEmbed}=require('discord.js')
const axios = require('axios')

module.exports = (bot, prefixMovi)=>{
    bot.on('message', async message =>{
    const movieSearch = message.content.replace(prefixMovi,'')
    console.log(movieSearch)
    if(message.content===prefixMovi+movieSearch){
    let response = await axios.get(`http://omdbapi.com/?t=${movieSearch}&i=tt3896198&apikey=37bca326`);//milpordia
    if(response.data.Response === 'False'){
      message.channel.send(`No me gusta esa Pelicula`);  
    }
    const embed = new MessageEmbed()
      .setTitle('You movie search')
      .setColor('BLUE')
      .setAuthor(`- - - - - > ${movieSearch.toUpperCase()} < - - - - - - -`,`${response.data.Poster}`)
      .addField(`Title:  ${response.data.Title} - Year:  ${response.data.Year}  -  Rated:  ${response.data.Rated} `,'------------------------------------')
      .addField(`Director: ${response.data.Director}  - Released:  ${response.data.Released}  -  Runtime:  ${response.data.Runtime} `,'------------------------------------')
      .addField(`Genre:  ${response.data.Genre}`,'------------------------------------')
      .addField(`Writer: ${response.data.Writer}`,'------------------------------------')
      .addField(`Actors: ${response.data.Actors}`,'------------------------------------')
      .addField(`Language: ${response.data.Language}  -  Country: ${response.data.Country} `,'------------------------------------')
      .setImage(`${response.data.Poster}`)
      message.channel.send(embed);  
  }{

  }
})
}