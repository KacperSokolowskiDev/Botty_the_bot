require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Botty the bot is ready to work!");
});

client.login(process.env.BOT_TOKEN);
