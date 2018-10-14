const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const math = require('math-expression-evaluator')
const stripIndents = require('common-tags').stripIndents



exports.run = (client, message, args) => {
    var soru = args.join(' ');

    if(!soru) return message.reply('Bir işlem belirtin. Örnek: 12+12')
    else { let cevap;
       try {
           cevap = math.eval(soru)
       } catch(err) {
           message.channel.send('Hatalı işlem: **' + err)
       }

       const embed = new Discord.RichEmbed()
       .addField('Soru', soru)
       .addField('Cevap', cevap)

       message.channel.send(embed)
    }

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'hesapla',
  description: 'Yazdığınız işlemi hesaplar.',
  usage: 'hesapla <işlem>'
};