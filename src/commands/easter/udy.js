const BaseCommand = require('../../utils/structures/BaseCommand');
const StateManager = require('../../utils/StateManager')
const { MessageEmbed } = require('discord.js')

module.exports = class UdyCommand extends BaseCommand {
    constructor () {
        super('udy', 'easter', [])
        this.connection = StateManager.connection;
    }

    async run (client, message, args) {
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!udy')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('Udy, o psicopata do Randuin')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://i.pinimg.com/564x/85/0c/82/850c8244e1d69467a1671c1b0d020136.jpg  ")
            .addField("O único com permissão de oprimir muié", 'Seguinte irmão, ou tu segue as palavra do pai, ou te taco esse skate aqui ó: dB(-|--<:/\nMas aí, tu é uma pessoa engraçada pra caralho, eu te admiro muito também (tirando a parte de vc ser incel)')
            .setColor('RANDOM')
            message.channel.send(embed);
        }
    }
    }
}