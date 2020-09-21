const BaseCommand = require('../../utils/structures/BaseCommand');
const StateManager = require('../../utils/StateManager')

module.exports = class ClimaCommand extends BaseCommand {
    constructor () {
        super('clima', 'misc', [])
        this.connection = StateManager.connection;
    }

    async run (client, message, args) {
        const weather = require('weather-js');
        const { MessageEmbed } = require('discord.js')
        const discord = require('discord.js')

        if(!args.length) {
            return message.channel.send("Insira a localização, seja um Estado ou algum lugar mais específico!")
        }
          
       weather.find({search: args.join(2), degreeType: 'C'}, function(err, result) {
            try {
                let embed = new discord.MessageEmbed()

                .setTitle(`Clima em: ${result[0].location.name}`)
    
                .setColor("RANDOM")
    
                .setDescription("Esse é o clima do local solicitado:")
    
                .addField("Temperatura", `${result[0].current.temperature}ºC`, true)
    
                .addField("Céu", result[0].current.skytext, true)
    
                .addField("Umidade", `${result[0].current.humidity}%`, true)
    
                .addField("Velocidade do Vento", result[0].current.windspeed, true)//What about image
    
                .addField("Tempo de Observação", result[0].current.observationtime, true)
    
                .addField("Direção do Vento", result[0].current.winddisplay, true)

                .setFooter("Talvez não seja 100% preciso!")
    
                .setThumbnail(result[0].current.imageUrl);
    
                message.channel.send(embed)
    
            } catch(err) {
    
                return message.channel.send("Não consegui encontrar informações do local especificado. Tenha certeza de que você inseriu uma localização.\nPara utilizar, digite o nome de um estado.")
    
            }
    
        });     
    }
}