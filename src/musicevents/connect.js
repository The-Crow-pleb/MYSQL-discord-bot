const BaseEvent = require('../utils/structures/BaseEvent');

module.exports = class NodeConnectEvent extends BaseEvent {
    constructor () {
        super('nodeConnect');
    }

    async run (client, node) {
        console.log("Novo módulo conectado")
    }
}