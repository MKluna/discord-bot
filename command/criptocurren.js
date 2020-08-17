const {MessageEmbed}=require('discord.js');
const axios = require('axios');

module.exports = (bot, aliases)=>{
    bot.on('message', async message =>{
    let palabraMayus = message.content.replace(aliases,'')
    const cryptoMoneda= palabraMayus.toUpperCase();
    const moneda="USD"; 
    if(message.content===aliases+palabraMayus){
    let response = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoMoneda}&tsyms=${moneda}`);
    const conten = response.data.DISPLAY[cryptoMoneda][moneda];

       const embed = new MessageEmbed()
      .setTitle('You Favorite search')
      .setColor('BLUE')
      .setAuthor(`- - - - - > ${cryptoMoneda} < - - - - - - -`,`https://www.cryptocompare.com/${conten.IMAGEURL}`)
      .addField(`PRICE:  ${conten.PRICE}`,'------------------------------------')
      .addField(`L:  ${conten.LOWDAY}  -  HI:  ${conten.HIGHDAY} `,'------------------------------------')
      .addField(`1H:  ${conten.CHANGEHOUR}%`,'------------------------------------')
      .addField(`24H: ${conten.CHANGEPCT24HOUR}%`,'------------------------------------')
      .addField(`VOL: ${conten.TOPTIERVOLUME24HOUR}`,'------------------------------------')
      .addField('Something One','Lorem Imsump')
      message.channel.send(embed);  
    }
})
}