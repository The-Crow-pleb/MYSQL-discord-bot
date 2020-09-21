const BaseCommand = require('../../utils/structures/BaseCommand');
const { Base } = require('discord.js');

module.exports = class BanCommand extends BaseCommand {
    constructor () {
        super('ban', 'mod', [])
    }

    async run (client, message, args) {
        if(message.author.bot) return;
        const { guild } = message
        const { discord } = require("discord.js");
        const { MessageEmbed } = require('discord.js')
        const user = message.mentions.users.first();
        if(!message.member.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**, Você não tem permissão para banir alguém!`)
        }
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) {
            return message.channel.send(`**${message.author.username}**, Eu não tenho permissão para banir!`)
        }
        if (!user) {
            try {
                const { MessageEmbed } = require('discord.js')
                let memberId = message.content.substring(message.content.indexOf(' ') + 1)
                let member = message.guild.members.cache.get(memberId);
                let bannedMember = await message.guild.members.ban(memberId)
                    if(bannedMember) {
                        const embed = new MessageEmbed()
                        .setTitle('Ação: Banimento.')
                        .setDescription(`${bannedMember.tag} foi banido(a) com sucesso!`)
                        .setColor('RANDOM')
                        .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
                        .setFooter(`Banimento realizado por: ${message.author.tag}`);
                    message.channel.send(embed)
                    }
            } catch (err) {
                message.reply('Provavelmente você tentou banir alguém com as mesmas permissões que você, tome cuidado, eu não posso banir alguém com as mesmas permissões que você!\n(Apenas se eu estiver acima dele na hierarquia de cargos)')
            }
        } else {
            await message.guild.members.ban(user)
            const embed = new MessageEmbed()
                .setTitle('Ação: Banimento.')
                .setDescription(`${user.tag} foi banido(a) com sucesso!`)
                .setColor('RANDOM')
                .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))
                .setFooter(`Banimento realizado por: ${message.author.tag}`);
            message.channel.send(embed)
            await message.guild.members.ban(user)
        } 
    }
}