const BaseCommand = require('../../utils/structures/BaseCommand');
const StateManager = require('../../utils/StateManager')
const guildCommandPrefixes = new Map();

module.exports = class KickCommand extends BaseCommand {
    constructor () {
        super('kick', 'mod', [])
        this.connection = StateManager.connection;
    }

    async run (client, message, args) {
        if(message.author.bot) return;
        const { guild } = message
        const { discord } = require("discord.js");
        const { MessageEmbed } = require('discord.js')
        const user = message.mentions.users.first();
  
        if(!message.member.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**, Você não tem permissão para isso!`)
        }     
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**, Eu não tenho permissão para fazer isso!`)
        }      
        let target = message.mentions.members.first();     
        if(!target) {
            return message.channel.send(`**${message.author.username}**, Por favor, mencione alguém.`)
        }
        if(target.id === message.author.id) {
            return message.channel.send(`**${message.author.username}**, Não é mais fácil usar o botão de "Sair do Servidor" nesse caso?`)
        }
        if(target.hasPermission("KICK_MEMBERS")) {
            return message.channel.send(`Qual foi, quer expulsar alguém do seu nível é? Isso será reportado ao seu chefe!`)
        }
        const embed = new MessageEmbed()
            .setTitle("Ação: Expulsão")
            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
            .setDescription(`${target} foi expulso(a) do servidor!`)
            .setColor("#ff2050")
            .setImage('https://i.pinimg.com/originals/6f/f1/40/6ff14029eb25bbbe796bcec5112eff67.gif')
            .setFooter(`${message.author.username} expulsou ${target}`);
        message.channel.send(embed)
        target.kick(args[1]);
    }
}