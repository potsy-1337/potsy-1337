exports.run  = async(client, message, args) => {
  var LOG    = await require("quick.db").fetch(`${message.guild.id}.log`);
  if (args[0] == "ayarla") {
    if (LOG) {
      await require("quick.db").delete(`${message.guild.id}.log`);
      message.channel.send("Başarıyla **sıfırlandı**!");
    } else {
      var CHANNEL = message.mentions.channels.first() || message.guild.channels.get(args[1]) || message.guild.channels.find(VALUE => VALUE.name.toLowerCase() == args.slice(1).join(" ").toLowerCase());
      if (!CHANNEL) return message.channel.send(`Bir **kanal** belirt!`);
      await require("quick.db").set(`${message.guild.id}.log`, CHANNEL.id);
      message.channel.send(`Log kanalı başarıyla <#${CHANNEL.id}> olarak **ayarlandı!**`);
    }
  } else if ((args[0] != "ayarla" || !args[0])) {
    if (!LOG) return message.reply("Log kanalı ayarlamadan bir işlem yapamazsın!\n**Ayarlamak için;** .kick ayarla `kanal ID`\n**Sıfırlamak için;** .kick ayarla");
    var MEMBER = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!MEMBER) return message.channel.send("Bir **üye** belirt!");
    var REASON = args.slice(1).join(" ");
    if (!REASON) {
      await MEMBER.kick({reason: `Yok! | Kickleyen: ${message.author.tag} & ${message.author.id}`}).catch(err => { console.error(err); return message.channel.send("Bir **hata** oluştu! Eğer geliştirici iseniz lütfen **konsolu** inceleyiniz!"); });
      await message.guild.channels.get(LOG).send(`Bir üye **kicklendi**;\n>>> **Kickleyen**: ${message.member.displayName} - \`${message.author.id}\`\n**Kicklenen**: ${MEMBER.user.tag} - \`${MEMBER.user.id}\`\n**Sebep**: Yok!`)
      message.channel.send("Üye başarıyla **kicklendi**!");
    } else {
      await MEMBER.kick({reason: `${REASON} | Kickleyen: ${message.author.tag} & ${message.author.id}`}).catch(err => { console.error(err); return message.channel.send("Bir **hata** oluştu! Eğer geliştirici iseniz lütfen **konsolu** inceleyiniz!"); });
      await message.guild.channels.get(LOG).send(`Bir üye **kicklendi**;\n>>> **Kickleyen**: ${message.member.displayName} - \`${message.author.id}\`\n**Kicklenen**: ${MEMBER.user.tag} - \`${MEMBER.user.id}\`\n**Sebep**: \`${REASON}\``)
      message.channel.send("Üye başarıyla **kicklendi**!");
    }
  }
};
exports.conf = { aliases: [], permLevel: 0 };
exports.help = { name: "kick" };