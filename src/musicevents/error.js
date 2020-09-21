const BaseEvent = require('../utils/structures/BaseEvent');
const { Channel, Message } = require('discord.js');

module.exports = class NodeErrorEvent extends BaseEvent {
    constructor () {
        super('nodeError');
    }

    async run (client, node) {

    }
}