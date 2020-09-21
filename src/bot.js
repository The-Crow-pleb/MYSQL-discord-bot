require('dotenv').config();
const { Client } = require('discord.js');
const { registerCommands, registerEvents, registerMusicEvents } = require('./utils/register');
const client = new Client();
const StateManager = require('./utils/StateManager');
const { ErelaClient } = require('erela.js');

(async () => {
    await client.login(process.env.BOT_TOKEN);
    client.commands = new Map();
    client.music = new ErelaClient(client, [
        {
            host: "localhost",
            port: 2333,
            password: "youshallnotpass",
        }
    ]);
    await registerMusicEvents(client.music, '../musicevents')
    await registerCommands(client, '../commands')
    await registerEvents(client, '../events')
})();