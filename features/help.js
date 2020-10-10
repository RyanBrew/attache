const Discord = require("discord.js");

class Help{
  async help_message(msg) {
    const embed =  new Discord.RichEmbed()
    embed.setTitle("Attaché's Tools Help Menu")
    embed.setDescription("All commands below must be prefixed with `a?`, all arguments are surrounded by `<>`")
    embed.addField("Exchange Currency", "This command will convert currency\n`a?convert <amount> <from> <to>`\nexample: `a?convert 200 USD EUR`")
    embed.addField("Fee Calculator", "This command will calculate the payouts for every major platform\n`a?fee <amount>`\nexample: `a?fee 100`")
    embed.addField("Shoe Size Converter", "This command will convert shoe sizes from different regions\n`a?shoe <size> <from> <to>`\nexample: `a?shoe 9.5 US UK`")
    embed.addField("Supreme Sellout Times", "This command will send the 5 items that sold out quickest in the most recent supreme drop\n`a?sellout <region>`\nexample: `a?sellout us`")
    embed.setColor("#3f0101")
    await msg.channel.send(embed);
  }
}
module.exports = Help;
