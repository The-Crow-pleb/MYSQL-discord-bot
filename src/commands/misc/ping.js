const BaseCommand = require('../../utils/structures/BaseCommand');
const StateManager = require('../../utils/StateManager')
const guildCommandPrefixes = new Map();

module.exports = class PingCommand extends BaseCommand {
    constructor () {
        super('ping', 'misc', [])
        this.connection = StateManager.connection;
    }

    async run (client, message, args) {
        if(message.author.bot) return;
        let msg = await message.channel.send(`🏓 Pinging....`)
        .then((msg) => {
            setTimeout(function() {
                msg.edit(`🏓 Pong!
    
                Meu ping é de; ${Math.floor(msg.createdTimestamp - message.createdTimestamp)}ms
    
                O ping da API do Discord é de; ${Math.round(client.ws.ping)}ms`);
            }, 2000)
        })
    }
}                                                                       