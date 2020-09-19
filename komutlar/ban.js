const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args, level) => {
  
  let prefix = db.fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
  
if(!message.member.roles.has("banhammer rol id"))
if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Nabıyosun amk yetkin yok");  
  let guild = message.guild
   let user = message.mentions.users.first() || message.guild.members.get(args[0]);
  let sChannel = message.guild.channels.find(c => c.id === "logkanalid")
  let sebep = args.slice(1).join(" ") || `Belirtilmemiş.`
  let yasaklayankisi = `Yasaklayan : ${message.author.tag} - ${message.author.id}`
  if (!user) return message.channel.send(`Kimi infaz edeceksin ? `)
if(isNaN(user)) {
  let qwe = `${user}`
  
    let trq = new Discord.RichEmbed()
  .setTitle('Potsy')
  .addField(`İnfaz Edilen birileri var`, `**Yasaklayan :** ${message.author.tag} \n **Yasaklanan :** ${qwe}\n **Yasaklama Nedeni :** ${sebep} `)
  .setImage('https://cdn.discordapp.com/attachments/693630031531868191/693928382215487519/62ac6016dc438a1fe4926ed43d3fe280.gif')
  sChannel.send(trq)
  
} else {
  let ryan = new Discord.Embed()
  .setTitle('Potsy')
  .addField(`Yeni Yasalama`, `**Yasaklayan :** ${message.author.tag} \n **Yasaklanan :** ${user.tag}\n **Yasaklama Nedeni :** ${sebep} `)
  .setImage('https://cdn.discordapp.com/attachments/693630031531868191/693928382215487519/62ac6016dc438a1fe4926ed43d3fe280.gif')
 return sChannel.send(ryan)
}
  if (user == message.author) return message.channel.send(`Kimi yasaklamalıyım ? `)
  message.guild.member(user).ban(`${sebep} | ${yasaklayankisi}`)

  let d3m1rk4n = new Discord.RichEmbed()
  .setColor("BLUE")
  .setAuthor(`Sunucuda ki halkın gözü önünde yasaklandın kanka`, user.avatarURL)
  .setDescription(`**${guild.name}** sunucusundan **${sebep}** sebebiyle yakıldın.`)
  .setImage('https://cdn.discordapp.com/attachments/693630031531868191/693928382215487519/62ac6016dc438a1fe4926ed43d3fe280.gif')
  user.send(d3m1rk4n)
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['infaz', 'yak', 'ban', 'triquetraban'],
  permLevel: 0
};
exports.help = {
  name: 'thor',
  description: 'Belirttiğiniz kullanıcıyı sunucudan yasaklar.',
  usage: 'thor <@kullanıcı>'
};