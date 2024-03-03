const config = require("./config.json");
const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["MessageContent", "GUildMessages", "Guilds", "GuildMembers" ] })

client.on("ready", () => {
	console.log("Bot is ready");
});

var bannedWordsRegex = /\b(?:murder|kill|assassinate|slay|terminate|execute|eliminate|dispatch|eradicate|annihilate|destroy|whack|liquidate|neutralize|dispatch)\b/i;

client.on("messageCreate", (message) => {
	// We are targetting you Kurt.
	if(message.author.id !== "342996187923873792") return;
	if(bannedWordsRegex.test(message.content)) {
		message.member.timeout(1 * 60 * 1000, "No :)");
		message.delete();
		message.channel.send("Bad Kurt.");
	}
});

client.login(config.token)