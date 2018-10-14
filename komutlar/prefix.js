const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message,) => {
    message.reply('prefix:**-**')
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'prefix',
  description: 'Botun prefixini gösterir.',
  usage: 'prefix'
};