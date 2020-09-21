const BaseCommand = require('../../utils/structures/BaseCommand');
const StateManager = require('../../utils/StateManager')
const { MessageEmbed } = require('discord.js')
module.exports = class ConviteCommand extends BaseCommand {
    constructor () {
        super('convidar', 'misc', [])
        this.connection = StateManager.connection;
    }

    async run (client, message, args) {
        if(message.author.bot) return;

        const { guild } = message

        const embed = new MessageEmbed()

            .setDescription('Olá, [este](https://discord.com/oauth2/authorize?client_id=748727573814575196&scope=bot&permissions=2146958719) é o convite que me fará entrar em seu servidor!')

            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))

            .setColor('RANDOM')

            .setThumbnail('https://i.gifer.com/H0bB.gif')

            .setFooter('Sim! Eu preciso de bastante permissões para funcionar, não me culpe!')

            message.channel.send(embed)
    }
}