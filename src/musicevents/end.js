const BaseEvent = require('../utils/structures/BaseEvent');

module.exports = class TrackStartEvent extends BaseEvent {
  constructor () {
    super('queueEnd');
  }

  async run (client, player) {
    player.textChannel.send("A playlist foi finalizada!")
    client.music.players.destroy(player.guild.id);
  }
}