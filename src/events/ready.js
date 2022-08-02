const { ActivityType } = require("discord.js")

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
    let activities = [ `ArviS#0011`, `${client.user.username}` ], i = 0;
    setInterval(() => client.user.setActivity({ name: `${activities[i++ % activities.length]}`, type: ActivityType.Watching }), 22000);
}};










//ArviS#0011