import { AkairoClient, CommandHandler, ListenerHandler } from 'discord-akairo'
import { User, Message } from 'discord.js'
import { join } from 'path'
import { prefix, owners, dbName } from '../Config'
import { Listener } from 'discord-akairo';
import { Connection } from 'typeorm'
import Database from '../structures/Database'

declare module "discord-akairo" {
    interface AkairoClient {
        commandHandler: CommandHandler;
        listenerHandler: ListenerHandler;
        db: Connection;
    }
}

interface BotOptions {
    token?: string;
    owners?: string | string[];
}

export default class BotClient extends AkairoClient {
    public config: BotOptions;
    public db!: Connection;
    public listenerHandler: ListenerHandler = new ListenerHandler(this, {
        directory: join(__dirname, "..", "listeners")
    });

    public commandHandler: CommandHandler = new CommandHandler(this, {
        directory: join(__dirname, "..", "commands"),
        prefix: prefix,
        allowMention: true,
        handleEdits: true,
        commandUtil: true,
        commandUtilLifetime: 3e5,
        defaultCooldown: 6e4,
        argumentDefaults: {
            prompt: {
                modifyStart: (_: Message, str: string): string => `${str}\n\nType \`cancel\` to cancel the command...`,
                modifyRetry: (_: Message, str: string): string => `${str}\n\nType \`cancel\` to cancel the command...`,
                timeout: "Time Error",
                ended: "Type Again This Command!",
                cancel: "Command Canceled",
                retries: 3,
                time: 3e4
            },
            otherwise: ""
        },
        ignorePermissions: owners
    });

    public constructor(config: BotOptions) {
      super({
          ownerID: config.owners
      });

      this.config = config;
    }

    private async _init(): Promise<void> {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process
        });

        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();

        this.db = Database.get(dbName)
        await this.db.connect()
        await this.db.synchronize()
    }

    public async start(): Promise<string> {
        await this._init();
        return this.login(this.config.token)
    }
}