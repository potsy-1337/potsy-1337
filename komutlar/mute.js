const Discord = require("discord.js");
const ms = require("ms");
const djsturkiye = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if(!message.member.hasPermission("ADMINISTRATOR"))
  if(!message.member.roles.has("mute hammer id")) return message.channel.send(`**Bu Komutu Kullanma Yetkin Bulunmuyor.**`)
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || djsturkiye.prefix;
  let üye = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!üye) return message.channel.send(`Kime işlem yapılacağını belirtmelisin! \n**Doğru Kullanım:** \`${prefix}mute @Kullanıcı <isterseniz süre> <isterseniz sebep>\``);
  
  let log = message.guild.channels.find(c => c.id === "log kanal id");
  let rol = message.guild.roles.find(abc => abc.id  === "muted rol id");
  message.react("emoji id");
  if(!rol) {
    if (!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.channel.send(`\`Hata:\`  Botun yetkisi yetersiz!  **(Botun,  \`Kanalları Yönet\` ve \`Rolleri Yönet\`  yetkisi açık olmalıdır!)** `);
    try {
      rol = await message.guild.createRole({
        name: "Muted",
        color: "#818386",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(rol, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          SPEAK: false
        });
      });
    } catch(e) { console.log(e) };
  };

  let süre = args[1].replace('gün'.toLowerCase(), 'd').replace('saat'.toLowerCase(), 'h').replace('dakika'.toLowerCase(), 'm').replace('saniye'.toLowerCase(), 's');
  let sebep = args.slice(2).join(' ') || `Belirtilmemiş`
  if(üye.roles.has(rol.id)) {
    await(üye.removeRole(rol));
    const embed = new Discord.RichEmbed()
    .setDescription(`**${üye}  Adlı Üyenin Susturulması Kaldırıldı!**`)
    .setFooter(message.author.username)
    .setTimestamp()
    .setColor("ffe900")
    log.send(embed)
    return
  }
  
  if(!süre) {
    await(üye.addRole(rol));
    const embed1 = new Discord.RichEmbed()
    .setDescription(`**${üye}  Adlı Üye \`Süresiz\` Susturuldu!**`)
    .setFooter(message.author.username)
    .setTimestamp()
    .setColor("72007e")
    log.send(embed1)
  } else {
    await(üye.addRole(rol));
    const embed2 = new Discord.RichEmbed()
    .setDescription(`**${üye}  Adlı üye  \`${ms(ms(süre))}\`  Süre Boyunca \`${sebep}\` Sebebi İle Susturuldu.** `)
    .setFooter(message.author.username)
    .setTimestamp()
    .setColor("72007e")
    log.send(embed2);
    setTimeout(function(){
      üye.removeRole(rol);
    const embed3 = new Discord.RichEmbed()
    .setDescription(`**${üye}  Adlı Üyenin Susturulma Süresi Dolduğu İçin Susturulması Kaldırıldı!**`)
    .setFooter(message.author.username)
    .setTimestamp()
    .setColor("ffe900")
    log.send(embed3);
    }, ms(süre));
  };
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sustur'],
  permLevel: 0
};

exports.help = {
  name: 'mute',
  description: 'Belirtilen kullanıcıyı belirtilen süre kadar susturur/susturmasını açar.',
  usage: 'mute @Kullanıcı [İsterseniz Süre]',
  kategori: 'yetkili'
};