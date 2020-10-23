module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
        async function ping() {
            const m = await message.channel.send("Ping?");
            m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms.`);
        }
        ping();
    },
};