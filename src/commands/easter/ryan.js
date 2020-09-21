const BaseCommand = require('../../utils/structures/BaseCommand');
const StateManager = require('../../utils/StateManager')
const { MessageEmbed } = require('discord.js')

module.exports = class RyanCommand extends BaseCommand {
    constructor () {
        super('ryan', 'easter', [])
        this.connection = StateManager.connection;
    }

    async run (client, message, args) {
        const { guild } = message;
        if(message.content.toLowerCase().startsWith('c!ryan')) {
            const args = message.content.split(' ');
            if(args.length > 1) {
              message.channel.send(`Tente Novamente!`);
          } else if(args.length === 1) {
              const embed = new MessageEmbed()
              .setTitle('Ryan Surfistinha')
              .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
              .setImage("https://i.pinimg.com/originals/5d/c7/47/5dc747b39cefe497e86566d632e199cd.gif")
              .addField("Ry, o Mono Yi", 'Ryan, eu não sei ao certo quem você é, o que você é ou o que sente, você é uma das pessoas que eu não consigo ler de modo algum.\nApesar disso, eu agradeço por se preocupar, mesmo que pouco comigo e com ela. Você realmente foi importante.')
              .setColor('RANDOM')
              message.channel.send(embed);
          }
      }
    }
}