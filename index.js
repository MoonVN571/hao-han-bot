const { Client, Intents, Collection } = require('discord.js'); // import
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_PRESENCES] }); // tạo client discord
const config = require('./config.json');
require('dotenv').config();

client.config = config;
client.prefix = config.PREFIX;

client.commands = new Collection();
client.slashCommands = new Collection();

module.exports = client;

require('./handlers/baseHandler');

client.login(process.env.TOKEN, err => console.log(err));
