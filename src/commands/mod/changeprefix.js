const BaseCommand = require('../../utils/structures/BaseCommand');
const StateManager = require('../../utils/StateManager')
const guildCommandPrefixes = new Map();

module.exports = class ChangePrefixCommand extends BaseCommand {
    constructor () {
        super('chp', 'owner', [])
        this.connection = StateManager.connection;
    }

    async run (client, message, args) {
        if (message.member.id === message.guild.ownerID) {
            const [ cmdName, newPrefix] = message.content.split(" ");
            if(newPrefix) {
                try {
                    await this.connection.query(
                        `UPDATE GuildConfigurable SET cmdPrefix = '${newPrefix}' WHERE guildId = '${message.guild.id}'`
                    );
                    guildCommandPrefixes.set(message.guild.id, newPrefix);
                    message.channel.send(`O prefixo foi atualizado para: ${newPrefix}`)
                    StateManager.emit('prefixUpdate', message.guild.id, newPrefix)
                } catch(err) {
                    console.log(err)
                    message.channel.send(`A atualização de prefixo para '${newPrefix}' falhou!`)
                }
            } else {
                message.channel.send('Insira um caractere para a atualização de prefixo')
            }
        } else {
                message.channel.send('Apenas o dono do servidor tem permissão para a troca de prefixo!')
        }
        
    }
}