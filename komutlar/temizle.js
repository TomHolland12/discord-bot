const Discord = require('discord.js');


exports.run = function(client, message, args) {
  const sayi = args.slice(0).join(' ')


  if(sayi.length < 1) {
    return message.reply("Silmem için bir sayı belirt.")
  } else {
        message.channel.bulkDelete(sayi);
    message.channel.send("**" + sayi + "** adet mesaj sildim!").then(msg =>{
        msg.delete("5000")
    });
  }

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'temizle',
  description: 'belirtilen miktarda mesaj siler.',
  usage: 'temizle <miktar>'
};
