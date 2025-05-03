const { Telegraf } = require('telegraf');
require('dotenv').config();
const bot = new Telegraf(process.env.BOT_TOKEN);

const bubbleSortString = `
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
`;

try{
    bot.start((ctx) => ctx.reply('Welcome to shubh\'s dev'));  // this will run on /start command

    bot.command('bubblesort', (ctx) => ctx.reply(bubbleSortString));  // this is custom command like /binarysearch

    bot.on('sticker', (ctx) => ctx.reply('❤️'));

    bot.on('emoji', (ctx) => ctx.reply('🤣'));

    bot.launch();
}
catch{
    console.log("Unexpected command");
}