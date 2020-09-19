exports.run  = async(client, message, args) => {
  const Discord = require('discord.js');
  const db = require('quick.db');
  
if(!message.member.roles.has("ability rol id") && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.send("Bu komutu kullanmaya yetkin yok."); 


 let user = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!user.roles.has('vip rol id')) {
user.addRole('vip rol id')
const ryancık = new Discord.RichEmbed()
.setDescription(`${user} Allah oldun afrm`)
  message.channel.send(ryancık)

message.react('react id')


} else {
  user.removeRole('vip rol id')
const member = new Discord.RichEmbed()
.setDescription(`${user} köle statüsüne düşürüldü köle oç.`)
message.channel.send(member)


  message.react('react id')



  
}
    }
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['vip', 'allah'],
  permLevel: 0,
};

exports.help = {
  name: 'vip',
  description: 'vip.',
  usage: 'vip @member.id',
};