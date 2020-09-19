 
exports.run = async (client, message, args) => {
   let user = message.mentions.users.first() || message.guild.members.get(args[0]); 
  let isim = args.slice(1).join(' ');
  if(!user || !isim) return message.reply(`Bir üye ve isim belirtmelisin!\n\`${this.help.usage}\``);
  isim === "sıfırla" ? user.setNickname(user.user.username) : user.setNickname(isim);
  message.channel.send(`Başarıyla belirtilen üyenin ismi değiştirildi!`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  permLevel: 0,
  aliases: ['name', 'nick', 'n']
};

exports.help = {
  name: "isim",
  description: "Belirtilen kullanıcının ismini değiştirmenize yarar.",
  usage: "isim [uye] [yeniIsim]"
};

