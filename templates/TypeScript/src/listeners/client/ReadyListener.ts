import { Listener } from 'discord-akairo'

export default class ReadyListener extends Listener {
    public constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        })
    }

    public exec(): void {
        this.client.user.setActivity('ts bot')
        console.log(`${this.client.user.tag} Is Online`)
    }
}