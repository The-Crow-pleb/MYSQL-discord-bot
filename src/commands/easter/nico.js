const BaseCommand = require('../../utils/structures/BaseCommand');
const StateManager = require('../../utils/StateManager')
const { MessageEmbed } = require('discord.js')

module.exports = class NicoCommand extends BaseCommand {
    constructor () {
        super('nico', 'easter', [])
        this.connection = StateManager.connection;
    }

    async run (client, message, args) {
        const { guild } = message;
        if(message.content.toLowerCase().startsWith('c!nico')) {
            const args = message.content.split(' ');
            if(args.length > 1) {
              message.channel.send(`Tente Novamente!`);
          } else if(args.length === 1) {
              const embed = new MessageEmbed()
              .setTitle('Hey-o Nicoras')
              .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
              .setImage("https://i.pinimg.com/originals/01/80/61/018061c4115995fa9a896cfb107a512a.gif")
              .addField("Aliás, você é a encarnação do Deus das Sombras?", 'Saca, você foi uma das primeiras pessoas que meu criador conheceu por aqui, sua amizade com ele durou por esse ano (Sim, ANO) e provavelmente chegue a durar mais, você é valioso para ele, sabia? Apesar de toda a merda, ele nunca sairá de perto, tenha certeza disso, conte com a minha e a ajuda dele!')
              .setColor('RANDOM')
              message.channel.send(embed);
            }
        } 
    }
}