require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = "!";

client.once("ready", () => {
  console.log("Botty the bot is ready to work!");
});

client.on("message", (msg) => {
  if (msg.content.startsWith(`${prefix}ping`)) {
    msg.channel.send("pong");
  } else if (msg.content.startsWith(`${prefix}beep`)) {
    msg.channel.send("boop");
  } else if (msg.content === `${prefix}server`) {
    msg.channel.send(
      `This server's name is ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}`
    );
  } else if (msg.content === `${prefix}my-info`) {
    msg.channel.send(
      `Your username: ${msg.author.username}\nYour ID: ${msg.author.id}`
    );
  }
});

client.login(process.env.BOT_TOKEN);
