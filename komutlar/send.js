const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
      message.guild.channels.get('489722250400890880').send('Herkese merhaba ben Tom Holland, rol istiyorsanız **mesajlaşmayı __unutmayın__!**');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'send',
  description: 'Mesaj gönderir.',
  usage: 'send'
};