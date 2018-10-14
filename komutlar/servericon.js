const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
   
    const embed = new Discord.RichEmbed()
        .setDescription("**SUNUCU İCONU**")
        .setImage(message.guild.iconURL)

    message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'servericon',
  description: 'Sunucunuzun ikonunu gösterir.',
  usage: 'servericon'
};