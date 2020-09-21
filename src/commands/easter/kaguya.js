const BaseCommand = require('../../utils/structures/BaseCommand');
const StateManager = require('../../utils/StateManager')
const { MessageEmbed } = require('discord.js')

module.exports = class KaguyaCommand extends BaseCommand {
    constructor () {
        super('kaguya', 'easter', [])
        this.connection = StateManager.connection;
    }

    async run (client, message, args) {
        const { guild } = message;
        if(message.author.bot) return;
        if(message.content.toLowerCase().startsWith('c!kaguya')) {
          const args = message.content.split(' ');
          if(args.length > 1) {
            message.channel.send(`Tente Novamente!`);
        } else if(args.length === 1) {
            const embed = new MessageEmbed()
            .setTitle('Kaguya-Sama')
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setImage("https://i.pinimg.com/originals/9a/51/d8/9a51d8400ddf936328a4fcabb0129c7f.gif")
            .addField("Fofamente fofa", 'Você o acompanhou até o momento, eu agradeço, Kaguya, você é a melhor pessoa que eu conheci neste lugar nojento e hostil, a mais pura e provavelmente a mais inocente. Cuide dele por mim, as asas dele ainda não brilham, elas ainda não estão na sua última forma, e não se desespere, a hora que elas se tornarão mais majestosas que quaisquer asas.\nE você também, brilhe do modo que você merece brilhar, permita-se brilhar, não se segure, você consegue.')
            .setColor('RANDOM')
        message.channel.send(embed);
        }
        }
    }
}