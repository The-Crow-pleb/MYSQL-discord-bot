const BaseCommand = require('../../utils/structures/BaseCommand');
const StateManager = require('../../utils/StateManager')
const { MessageEmbed } = require('discord.js')

module.exports = class SonCommand extends BaseCommand {
    constructor () {
        super('son', 'easter', [])
        this.connection = StateManager.connection;
    }

    async run (client, message, args) {
        const { guild } = message;
        if(message.content.toLowerCase().startsWith('c!son')) {
            const args = message.content.split(' ');
            if(args.length > 1) {
              message.channel.send(`Tente Novamente!`);
          } else if(args.length === 1) {
              const embed = new MessageEmbed()
              .setTitle('Son, o ursão')
              .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
              .setImage("https://media0.giphy.com/media/aHCl9hfKPkFlS/source.gif")
              .addField("Tu é um urso humano ou um humano urso?", 'Eu não tenho muito o que dizer, você me apresentou pessoas fora daqui, e eu realmente agradeço a isso, obrigado, Son, eu nunca vou esquecer da tua amizade.\nSinceramente, você é a pessoa mais gente boa que eu conheci durante toda minha vida, eu te admiro.')
              .setColor('RANDOM')
              message.channel.send(embed);
          }
      }
    }
}