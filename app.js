// DEPENDENCIES
const Discord = require("discord.js");
const bot = new Discord.Client();
require('dotenv').config()
//
 
const fee = new (require('./features/fee'))();
const help = new (require('./features/help'))();
const curr = new (require('./features/curr'))
const shoe = new (require('./features/shoe'))
const supcommunity = new (require('./features/supcommunity'))


bot.on('message', (msg) => {
   if (msg.content.startsWith(`a?help`)) {
       help.help_message(msg);
   }
   else if (msg.content.startsWith(`a?fee`)) {
       fee.calculate_fee(msg);
   }
   else if (msg.content.startsWith(`a?convert`)) {
       curr.convert(msg)
   }
   else if (msg.content.startsWith(`a?shoe`)) {
       shoe.convert(msg)
   }
   else if (msg.content.startsWith(`a?sellout`)) {
       supcommunity.sellout(msg)
   }
});
 
bot.on('ready', () => {
   bot.user.setActivity("!help | invite me :) ")
});
 
// LOG IN
bot.login(process.env.BOT_TOKEN).then(() => {
   console.log('authorized in all servers');
});
