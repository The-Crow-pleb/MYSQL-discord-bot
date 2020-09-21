const BaseCommand = require('../../utils/structures/BaseCommand');
const StateManager = require('../../utils/StateManager')
const { MessageEmbed } = require('discord.js')

module.exports = class SunCommand extends BaseCommand {
    constructor () {
        super('sun', 'easter', [])
        this.connection = StateManager.connection;
    }

    async run (client, message, args) {
        const { MessageEmbed } = require('discord.js')
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!sun')) {
        const args = message.content.split(' ');
        if(args.length > 1) {
        message.channel.send(`Tente novamente!`);
        } else if(args.length === 1) {
        const embed = new MessageEmbed()
            .setTitle('Sun, o Otaku Supremo')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setThumbnail("https://i.pinimg.com/originals/f8/06/1e/f8061e89d28da80e15857684859fb2b7.gif")
            .setImage('https://i.pinimg.com/originals/a2/50/da/a250da88d856fdd4243795d0c0881e18.gif')
            .addField("Lain dançando, fodase.", 'Um dos meus mais antigos companheiros, não sei ao certo se somos amigos, mas tenho certeza que você foi um dos melhores.')
            .setColor('RANDOM')
        message.channel.send(embed);
        }
        }
    }
}