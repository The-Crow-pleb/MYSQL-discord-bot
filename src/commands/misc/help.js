const BaseCommand = require('../../utils/structures/BaseCommand');
const StateManager = require('../../utils/StateManager')
const { MessageEmbed } = require('discord.js')

module.exports = class HelpCommand extends BaseCommand {
    constructor () {
        super('help', 'misc', [])
        this.connection = StateManager.connection;
    }

    async run (client, message, args) {
        const { guild } = message;
        if(message.author.bot) return;
        const embed = new MessageEmbed()

            .setTitle('Olá! Meu nome é Tocka, espero que consiga lhe ajudar!')

            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))

            .setThumbnail(guild.iconURL({ dynamic: true }))

            .addFields(
                {
                    name: 'Meu prefixo padrão é:', value: 'c!'
                },

                {
                    name: 'Utilidades:', 
                    value: 'c!convite(Para me convidar a um outro servidor!)\n\nc!help (Bem... Eu acho que não preciso explicar muito.)\n\nc!avatar (Mostra o avatar da pessoa mencionada ou pelo ID, ou o próorio avatar)\n\nc!info (Mostra informações do usuario **presente no servidor** mencionado/pelo ID do mesmo, ou, informações **deste** servidor)\n\nc!ping (Mostra o meu ping e o ping que eu tenho da API do Discord!)\n\nc!chp (Muda o seu prefixo para qualquer um, trate-se de lembrar do mesmo!)',
                    inline: true
                },

                {
                    name: 'Moderação:',
                    value: 'c!ban (Bane um membro do servidor)\n\nc!kick (Expulsa um membro do servidor)\n\nc!mute (Muta um membro)\n\nc!unban (Bem, todo comando de desbanimento só funciana por ID, então...)\n\nc!unmute (Desmuta um membro)',
                    inline: true
                },
                {
                    name: 'Música (Ainda em construção ativa, erros podem ocorrer):',
                    value: 'c!join (Faz o bot entrar no canal em que estiver)\n\nc!play <url> ou <nome da música> (Dá play na música, te dando algumas opções no caso de nome)\n\nc!leave (Desconecta o bot do canal)\n\nc!shuffle (Coloca a playlist em ordem aleatória)\n\nc!skip (Passa a música que estiver tocando)\n\nc!viewqueue (Te dá uma noção de quais músicas estão na playlist)',
                    inline: true
                }
            )

            .setFooter("Sim, eu sei, não tenho muitas funcionalidades, mas eu ainda estou em desenvolvimento, com muito esforço, prometo melhorar!\n\nMinha versão atual é: 3.0.0")

            .setColor('RANDOM')

        message.channel.send(embed);
    }
}