const Discord = require("discord.js")

module.exports.run = async (client, message, args) => {
  const voiceChannels = message.guild.channels.filter(c => c.type === 'voice');
    let count = 0;

    for (const [id, voiceChannel] of voiceChannels) count += voiceChannel.members.size;
      const emoji = client.emojis.find(emoji => emoji.id === "emoji id");


  
  let tag = 'user tag'
  let etiket = 'user discrim'
  const nooraembed = new Discord.RichEmbed()
  .setColor("Black")
       .setDescription(`**>** Sunucuda **${message.guild.memberCount}** adet üye var.\n**>** Şu anda toplam **${count}** kişi seslide.\n**>** Toplamda **${message.guild.members.filter(m => m.user.username.includes(tag)).size}** kişi tagımızı alarak bizi desteklemiş.\n**>** Toplamda **${message.guild.members.filter(m => m.user.discriminator.includes(etiket)).size}** kişi etiketine ${etiket} alıp bizi desteklemiş.`)
    
  message.channel.send(nooraembed)
  message.react(emoji)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say'],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: '.',
  usage: 'say'
};











