const BaseCommand = require('../../utils/structures/BaseCommand');
const StateManager = require('../../utils/StateManager')
const { MessageEmbed } = require('discord.js')

module.exports = class GordaoCommand extends BaseCommand {
    constructor () {
        super('gordao', 'easter', [])
        this.connection = StateManager.connection;
    }

    async run (client, message, args) {
        const { guild } = message;
        if(message.content.toLowerCase().startsWith('c!gordao')) {
            const args = message.content.split(' ');
            if(args.length > 1) {
              message.channel.send(`Tente Novamente!`);
          } else if(args.length === 1) {
              const embed = new MessageEmbed()
              .setTitle('Gragos, apenas.')
              .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
              .setImage("https://thumbs.gfycat.com/FemaleSeparateGoa-size_restricted.gif")
              .addField("Mono Gragas Nutella", 'Em ti, gordão, posso dizer que consegui uma amizade valiosa, apesar de não nos falarmos muito, ainda te considero alguém importante.\nObrigado por estar aqui, realmente, agradeço.')
              .setColor('RANDOM')
              message.channel.send(embed);
          }
      }
    }
}