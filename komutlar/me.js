const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {
 
  
  const üye = message.author
  const isim = args.slice(0).join(' ')
if(!message.member.hasPermission("ADMINISTRATOR"))
  if(!message.member.roles.has("booster id")) return message.channel.send(`**Bu Komutu Kullanma Yetkin Bulunmuyor.**`)
  if(!isim)
  return message.reply("Bir İsim Girmelisin!")
  const ryan = `${isim}`


  message.react('753291683298410568')
	let command = message.content.toLowerCase().split(' ')[1]; 
  if(command === 'qwe') {
  message.reply('bunu yapamazsın orsubu cocugu')
} else {
  let embed = new Discord.RichEmbed()
       .setAuthor(message.author.tag, message.author.avatarURL)
  

  .setTitle("Başarıyla İsmini Değiştirdim")
  .setTimestamp()
  .setColor("Black")
  .setFooter(message.guild.name)
  .setDescription(`**${üye} İsimli Kişinin İsmi Başarıyla Değiştirildi Yeni İsmi **${ryan}** Olarak Ayarlandı!**`)


message.guild.members.get(üye.id).setNickname(`${isim}`).then(x => message.channel.send(embed))


}
}
module.exports.conf = 
{
enabled: true,
aliases: ["me"],                                    
permLevel: 0};


module.exports.help = 
{
  name: "me",
  description: "",
  usage: "annen"


};