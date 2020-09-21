const BaseCommand = require('../../utils/structures/BaseCommand');
const StateManager = require('../../utils/StateManager')
const guildCommandPrefixes = new Map();

module.exports = class UnbanCommand extends BaseCommand {
    constructor () {
        super('unban', 'mod', [])
        this.connection = StateManager.connection;
    }

    async run (client, message, args) {
        if(message.author.bot) return;
        const { guild } = message

        const { MessageEmbed } =require('discord.js')

        if(!message.member.hasPermission('BAN_MEMBERS')) {

            message.channel.send("Você não tem acessso ao comando!!")

        }

        else {

            let memberId = message.content.substring(message.content.indexOf(' ') + 1)

            let member = message.guild.members.cache.get(memberId);

            try {

                let bannedMember = await message.guild.members.unban(memberId);

                if(bannedMember) {

                    const embed = new MessageEmbed()

                    .setTitle('Ação: Desbanimento.')

                    .setDescription(`${bannedMember.tag} foi desbanido(a) com sucesso!`)

                    .setColor('RANDOM')

                    .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))

                    .setFooter(`Desbanimento realizado por: ${message.author.tag}`);

                    message.channel.send(embed)

                }

        }

        catch(err) {

            const embed = new MessageEmbed()

            .setTitle('Falha!')

            .setDescription(`Não foi possível desbanir o membro com o id ${memberId}, tenha certeza de utilizar o ID correto!`)

            .setColor('RANDOM')

            .setAuthor(`${guild.name}`, guild.iconURL({ dynamic: true }))

            message.channel.send(embed)

            }

        }
    }
}