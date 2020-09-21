const BaseCommand = require('../../utils/structures/BaseCommand');
const StateManager = require('../../utils/StateManager')
const { dado } = require('../../utils/dicefn')

module.exports = class DadoCommand extends BaseCommand {
    constructor () {
        super('dado', 'misc', [])
        this.connection = StateManager.connection;
    }

    async run (client, message, args) {
        if(message.author.bot) return;
        let msg = await message.channel.send(`Girando o dado. . . 🎲`)
            .then((msg)=> {
                setTimeout(function(){
                  msg.edit('Você girou no dado o número ' + dado());
                }, 2000)
              })


    }
}