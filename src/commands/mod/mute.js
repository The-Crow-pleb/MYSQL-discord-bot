const BaseCommand = require('../../utils/structures/BaseCommand');
const StateManager = require('../../utils/StateManager')
const guildCommandPrefixes = new Map();

module.exports = class MuteCommand extends BaseCommand {
    constructor () {
        super('mute', 'mod', [])
        this.connection = StateManager.connection;
    }

    async run (client, message, args) {
        if(message.author.bot) return;
        const { guild } = message
        const { discord } = require("discord.js");
        const { MessageEmbed } = require('discord.js')
        const user = message.mentions.members.first();

        if (!message.member.hasPermission("MANAGE_ROLES")) {
            return message.channel.send(
                "Desculpe, mas você não tem permissão para fazer isso."
            );
        }
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
            return message.channel.send("Eu não tenho permissão para mutar alguém. Habilite a permissão 'Gerenciar Cargos' em meu cargo para que eu possa concluir o comando!");
        }
        if(!user) {
            try {
                const { MessageEmbed } = require('discord.js')
                let mutedRole = message.guild.roles.cache.find(x => x.name === "Silenciado")
                let memberId = message.content.substring(message.content.indexOf(' ') + 1)
                let member = message.guild.members.cache.get(memberId);
                if(!mutedRole) {
                    message.reply('Olá!\nParece que não há o cargo "Silenciado" neste servidor, tenha certeza de criar o mesmo e configurar os canais para de modo correto para o mute funcionar!')
                }
                if(mutedRole) {
                    member.roles.add(mutedRole)
                    const embed = new MessageEmbed()
                        .setTitle('Ação: Silenciamento')
                        .setDescription(`O usuário indicado foi silenciado(a) com sucesso!`)
                        .setColor('RANDOM')
                        .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
                        .setFooter(`Silenciamento realizado por: ${message.author.tag}`);
                    message.channel.send(embed)
                }
            }catch (err) {
                message.reply('ok')
                console.log(err)
                }
            } else {
                if(user.hasPermission('MANAGE_ROLES')) {
                return message.reply('Você não pode silenciar esse usuário! Ele tem a mesma ou mais permissões que você.')
            }
            let mutedRole = message.guild.roles.cache.find(x => x.name === "Silenciado")
            if(!mutedRole) {
                message.reply('Olá!\nParece que não há o cargo "Silenciado" neste servidor, tenha certeza de criar o mesmo e configurar os canais para de modo correto para o mute funcionar!')
            } 
            if(mutedRole) {
                user.roles.add(mutedRole)
                const embed = new MessageEmbed()
                    .setTitle('Ação: Silenciamento')
                    .setDescription(`O usuário mencionado foi silenciado(a) com sucesso!`)
                    .setColor('RANDOM')
                    .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
                    .setFooter(`Silenciamento realizado por: ${message.author.tag}`);
                message.channel.send(embed)
            }
        }
    }
}