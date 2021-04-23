require("dotenv").config();

const Discord = require("discord.js");
const client = new Discord.Client({
  partials: ["MESSAGE"],
});

const prefix = "!";

client.once("ready", () => {
  console.log("Botty the bot is ready to work!");
});

client.on("message", (msg) => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;
  const args = msg.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

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
  } else if (command === "args-info") {
    if (!args.length) {
      return msg.channel.send(
        `You didn't provide any arguments, ${msg.author}!`
      );
    } else if (args[0] === "foo") {
      return msg.channel.send("fighters");
    }

    msg.channel.send(`Command name: ${command}\nFirst Argument: ${args[0]}`);
  } else if (command === "kick") {
    if (!msg.mentions.users.size) {
      return msg.reply("You need to tag a user in order to kick them!");
    }
    const taggedUser = msg.mentions.users.first();
    msg.channel.send(`You wanted to kick: ${taggedUser.username}`);
  }
});

client.login(process.env.BOT_TOKEN);
