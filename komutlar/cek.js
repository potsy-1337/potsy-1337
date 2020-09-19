const Discord = require("discord.js");

exports.run = async (client, message, args) => {

   if (!message.member.roles.has('yetkili rol id') && !message.member.hasPermission('ADMINISTRATOR')) return message.channel.sendEmbed(new Discord.RichEmbed().setDescription('Bu komutu kullanabilmek için gerekli yetkiye sahip değilsin!').setColor("Black"));

  if (!message.member.voiceChannel) {
    return message.channel.send("Ses kanalında olman lazım!");
  }

   let kullanıcı = message.mentions.users.first() || message.guild.members.get(args[0]);
  if (!kullanıcı) return message.channel.send("**Kullanıcıyı etiketlemelisin.**");

  let rol = message.mentions.roles.first();
  let member = message.guild.member(kullanıcı);

  if (!member.voiceChannel) return message.channel.send("Etiketlenen kullanıcı bir ses kanalında değil");

  const voiceChannel = message.member.voiceChannel.id;
  if (!voiceChannel) return;

  member.setVoiceChannel(voiceChannel);

  const voiceChannel1 = message.member.voiceChannel.name;
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(
      message.author +
        " **Tarafından** " +
        kullanıcı +
        " **Kullanıcısı** `" +
        voiceChannel1 +
        "`** Sesli Kanalına Çekildi.**"
    )
    .setFooter(
      `${message.author.tag}`,
      `${message.author.displayAvatarURL}`
    )
    .setTimestamp();
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çek"],
  permLevel: 0
};
exports.help = {
  name: "çek",
  description: "çek",
  usage: "çek"
};