import { Command } from 'discord-akairo'
import { Message } from 'discord.js'

export default class PingCommand extends Command {
    public constructor() {
        super("ping", {
            aliases: ["ping"],
            category: "public",
            description: {
                content: "Ping Command",
                usage: "ping",
                examples: [
                    "!ping"
                ]
            },
            ratelimit: 3
        })
    }

    public exec(message: Message): Promise<Message> {
        return message.channel.send('Pong!')
    }
}