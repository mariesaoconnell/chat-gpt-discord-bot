require('dotenv/config');
const { Client, IntentsBitField } = require('discord.js');

// GUILDS REFERS TO SERVER
const client = new Client({
	intents: [
		IntentsBitField.Flags.Guilds,
		IntentsBitField.Flags.GuildMessages,
		IntentsBitField.Flags.MessageContent,
	],
});

// EVENT LISTENER, WHICH WILL LISTEN FOR WHEN THE BOT IS ONLINE
client.on('ready', () => {
	console.log('The bot is online!');
});

client.login(process.env.TOKEN);
