const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

const cevaplar = [
    "evet",
    "hayır",
    "belki",
    "daha sonra tekrar sor",
    "imkansız"
];

exports.run = (client, message, args) => {
    var soru = args.join(' ')

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]

    if(!soru) return message.reply('Bir soru belirt. **Doğru kullanım**: -8ball <soru>')
    else message.channel.send(cevap)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: '8ball',
  description: 'Sihirli 8ball sorularınızı cevaplar.',
  usage: '8ball <soru>'
};