const BaseEvent = require('../../utils/structures/BaseEvent');
const StateManager = require('../../utils/StateManager');
const guildCommandPrefixes = new Map();

module.exports = class ReadyEvent extends BaseEvent {
    constructor() {
        super('ready');
        this.connection = StateManager.connection;
    }

    async run (client) {

        console.log(client.user.tag + ` está online`)

        //Status de presença, mudar apenas o texto.
        //Tempo de mudança de Status em milissegundos
        client.user.setActivity("Gott Mit Uns", {type: 'PLAYING'});
        let activNum = 0;
        setInterval(function() {

                if(activNum === 0) {
                client.user.setActivity("Tocka é um sentimento tão vazio, porém, com tantos significados...")

                activNum = 1;
                } else if (activNum === 1) {
                client.user.setActivity("'Não se odeia quando pouco se preza, odeia-se só o que está à nossa altura ou é superior a nós.' —Nietszche")

                activNum = 2;
                } else if (activNum === 2) {
                client.user.setActivity("Gott ist tot.")

                activNum = 3;
                } else if (activNum === 3) {
                client.user.setActivity('E a melhor de todas as fotos nunca foi tirada, ela não está na memória da câmera, mas isso não significa que ela não esteja na memória; sonhar é bom, mas viver é ainda melhor. Aprecie, sinta o gosto, passa rápido.')
                activNum = 0;
            }  

        }, 300 * 1000);

        //MYSQL stuff, não mexer
        client.guilds.cache.forEach(guild => {
            this.connection.query(
                `SELECT cmdPrefix FROM GuildConfigurable WHERE guildId = '${guild.id}'`
            ).then(result => {
                const guildId = guild.id;
                const prefix = result[0][0].cmdPrefix
                guildCommandPrefixes.set(guild.id, prefix)
                StateManager.emit('prefixFetched', guildId, prefix);
            }).catch(err => console.log(err));
        });
    }
}