const Discord = require("discord.js");
exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('ADMINISTRATOR')) return;

  if(!args[0]) {
     const kilit = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription("Kanal başarıyla kilitlendi.")
    .setColor(0x36393E);
      message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: false
    }).then(() => {
      message.channel.send(kilit)
  }) }

  if(args[0] == "aç") {
     const kilit = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.displayAvatarURL)
    .setDescription("Kanalın kilidi başarıyla açıldı.")
    .setColor(0x36393E);
      message.channel.overwritePermissions(message.guild.id, {
      SEND_MESSAGES: true
    }).then(() => {
      message.channel.send(kilit)
  }) }


};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["kilit"],
  permLevel: 2
};
exports.help = {
  name: "kilit",
  description: "Birinin nickini değiştirir.",
  usage: "nick <yeni nick>"
};


