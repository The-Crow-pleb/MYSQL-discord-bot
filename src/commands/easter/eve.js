const BaseCommand = require('../../utils/structures/BaseCommand');
const StateManager = require('../../utils/StateManager')
const { MessageEmbed } = require('discord.js')

module.exports = class EveCommand extends BaseCommand {
    constructor () {
        super('eve', 'easter', [])
        this.connection = StateManager.connection;
    }

    async run (client, message, args) {
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!eve')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente Novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('Eve, para você.')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://i.pinimg.com/originals/10/1d/6d/101d6d064d43691fd929ac37cc1a6b74.gif")
            .addField("Destruidor de Mono Aatrox.", 'Se algum dia eu te encontrar, juro que te pago um sorvete.\nNão te devo nada, mas você também foi bom, espero que consiga o que deseja.')
            .setColor('RANDOM')
            message.channel.send(embed);
        }
        }
    }
}