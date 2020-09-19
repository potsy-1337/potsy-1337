const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')
exports.run = async (client ,message ,args) => {
const id = args[0]
if (!id)
return message.channel.send("**Herkesi Çekmem İstediğim Ses Kanalının İDsini Gir.**")
message.guild.members.cache.filter(a => a.voice.channel).forEach(x => x.voice.setChannel(id))

message.channel.send(`Bütün Sesli Kanaldaki Üyeler <#${id}> İsimli Odaya Çektim!`)

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['allcek', 'allçek'],
  permLevel: 2
};
exports.help = {
  name: "allcek"
};