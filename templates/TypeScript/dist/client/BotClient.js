"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const path_1 = require("path");
const Config_1 = require("../Config");
const Database_1 = __importDefault(require("../structures/Database"));
class BotClient extends discord_akairo_1.AkairoClient {
    constructor(config) {
        super({
            ownerID: config.owners
        });
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, {
            directory: path_1.join(__dirname, "..", "listeners")
        });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, {
            directory: path_1.join(__dirname, "..", "commands"),
            prefix: Config_1.prefix,
            allowMention: true,
            handleEdits: true,
            commandUtil: true,
            commandUtilLifetime: 3e5,
            defaultCooldown: 6e4,
            argumentDefaults: {
                prompt: {
                    modifyStart: (_, str) => `${str}\n\nType \`cancel\` to cancel the command...`,
                    modifyRetry: (_, str) => `${str}\n\nType \`cancel\` to cancel the command...`,
                    timeout: "Time Error",
                    ended: "Type Again This Command!",
                    cancel: "Command Canceled",
                    retries: 3,
                    time: 3e4
                },
                otherwise: ""
            },
            ignorePermissions: Config_1.owners
        });
        this.config = config;
    }
    async _init() {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            commandHandler: this.commandHandler,
            listenerHandler: this.listenerHandler,
            process
        });
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
        this.db = Database_1.default.get(Config_1.dbName);
        await this.db.connect();
        await this.db.synchronize();
    }
    async start() {
        await this._init();
        return this.login(this.config.token);
    }
}
exports.default = BotClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxtREFBOEU7QUFFOUUsK0JBQTJCO0FBQzNCLHNDQUFrRDtBQUdsRCxzRUFBNkM7QUFlN0MsTUFBcUIsU0FBVSxTQUFRLDZCQUFZO0lBOEIvQyxZQUFtQixNQUFrQjtRQUNuQyxLQUFLLENBQUM7WUFDRixPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU07U0FDekIsQ0FBQyxDQUFDO1FBOUJFLG9CQUFlLEdBQW9CLElBQUksZ0NBQWUsQ0FBQyxJQUFJLEVBQUU7WUFDaEUsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsQ0FBQztTQUNoRCxDQUFDLENBQUM7UUFFSSxtQkFBYyxHQUFtQixJQUFJLCtCQUFjLENBQUMsSUFBSSxFQUFFO1lBQzdELFNBQVMsRUFBRSxXQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxVQUFVLENBQUM7WUFDNUMsTUFBTSxFQUFFLGVBQU07WUFDZCxZQUFZLEVBQUUsSUFBSTtZQUNsQixXQUFXLEVBQUUsSUFBSTtZQUNqQixXQUFXLEVBQUUsSUFBSTtZQUNqQixtQkFBbUIsRUFBRSxHQUFHO1lBQ3hCLGVBQWUsRUFBRSxHQUFHO1lBQ3BCLGdCQUFnQixFQUFFO2dCQUNkLE1BQU0sRUFBRTtvQkFDSixXQUFXLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFVLEVBQUUsQ0FBQyxHQUFHLEdBQUcsOENBQThDO29CQUN0RyxXQUFXLEVBQUUsQ0FBQyxDQUFVLEVBQUUsR0FBVyxFQUFVLEVBQUUsQ0FBQyxHQUFHLEdBQUcsOENBQThDO29CQUN0RyxPQUFPLEVBQUUsWUFBWTtvQkFDckIsS0FBSyxFQUFFLDBCQUEwQjtvQkFDakMsTUFBTSxFQUFFLGtCQUFrQjtvQkFDMUIsT0FBTyxFQUFFLENBQUM7b0JBQ1YsSUFBSSxFQUFFLEdBQUc7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7YUFDaEI7WUFDRCxpQkFBaUIsRUFBRSxlQUFNO1NBQzVCLENBQUMsQ0FBQztRQU9ELElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFFTyxLQUFLLENBQUMsS0FBSztRQUNmLElBQUksQ0FBQyxjQUFjLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxlQUFlLENBQUMsV0FBVyxDQUFDO1lBQzdCLGNBQWMsRUFBRSxJQUFJLENBQUMsY0FBYztZQUNuQyxlQUFlLEVBQUUsSUFBSSxDQUFDLGVBQWU7WUFDckMsT0FBTztTQUNWLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUUvQixJQUFJLENBQUMsRUFBRSxHQUFHLGtCQUFRLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxDQUFBO1FBQzlCLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQTtRQUN2QixNQUFNLElBQUksQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUE7SUFDL0IsQ0FBQztJQUVNLEtBQUssQ0FBQyxLQUFLO1FBQ2QsTUFBTSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDeEMsQ0FBQztDQUNKO0FBMURELDRCQTBEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFrYWlyb0NsaWVudCwgQ29tbWFuZEhhbmRsZXIsIExpc3RlbmVySGFuZGxlciB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJ1xuaW1wb3J0IHsgVXNlciwgTWVzc2FnZSB9IGZyb20gJ2Rpc2NvcmQuanMnXG5pbXBvcnQgeyBqb2luIH0gZnJvbSAncGF0aCdcbmltcG9ydCB7IHByZWZpeCwgb3duZXJzLCBkYk5hbWUgfSBmcm9tICcuLi9Db25maWcnXG5pbXBvcnQgeyBMaXN0ZW5lciB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJztcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tICd0eXBlb3JtJ1xuaW1wb3J0IERhdGFiYXNlIGZyb20gJy4uL3N0cnVjdHVyZXMvRGF0YWJhc2UnXG5cbmRlY2xhcmUgbW9kdWxlIFwiZGlzY29yZC1ha2Fpcm9cIiB7XG4gICAgaW50ZXJmYWNlIEFrYWlyb0NsaWVudCB7XG4gICAgICAgIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlcjtcbiAgICAgICAgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXI7XG4gICAgICAgIGRiOiBDb25uZWN0aW9uO1xuICAgIH1cbn1cblxuaW50ZXJmYWNlIEJvdE9wdGlvbnMge1xuICAgIHRva2VuPzogc3RyaW5nO1xuICAgIG93bmVycz86IHN0cmluZyB8IHN0cmluZ1tdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb3RDbGllbnQgZXh0ZW5kcyBBa2Fpcm9DbGllbnQge1xuICAgIHB1YmxpYyBjb25maWc6IEJvdE9wdGlvbnM7XG4gICAgcHVibGljIGRiITogQ29ubmVjdGlvbjtcbiAgICBwdWJsaWMgbGlzdGVuZXJIYW5kbGVyOiBMaXN0ZW5lckhhbmRsZXIgPSBuZXcgTGlzdGVuZXJIYW5kbGVyKHRoaXMsIHtcbiAgICAgICAgZGlyZWN0b3J5OiBqb2luKF9fZGlybmFtZSwgXCIuLlwiLCBcImxpc3RlbmVyc1wiKVxuICAgIH0pO1xuXG4gICAgcHVibGljIGNvbW1hbmRIYW5kbGVyOiBDb21tYW5kSGFuZGxlciA9IG5ldyBDb21tYW5kSGFuZGxlcih0aGlzLCB7XG4gICAgICAgIGRpcmVjdG9yeTogam9pbihfX2Rpcm5hbWUsIFwiLi5cIiwgXCJjb21tYW5kc1wiKSxcbiAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgIGFsbG93TWVudGlvbjogdHJ1ZSxcbiAgICAgICAgaGFuZGxlRWRpdHM6IHRydWUsXG4gICAgICAgIGNvbW1hbmRVdGlsOiB0cnVlLFxuICAgICAgICBjb21tYW5kVXRpbExpZmV0aW1lOiAzZTUsXG4gICAgICAgIGRlZmF1bHRDb29sZG93bjogNmU0LFxuICAgICAgICBhcmd1bWVudERlZmF1bHRzOiB7XG4gICAgICAgICAgICBwcm9tcHQ6IHtcbiAgICAgICAgICAgICAgICBtb2RpZnlTdGFydDogKF86IE1lc3NhZ2UsIHN0cjogc3RyaW5nKTogc3RyaW5nID0+IGAke3N0cn1cXG5cXG5UeXBlIFxcYGNhbmNlbFxcYCB0byBjYW5jZWwgdGhlIGNvbW1hbmQuLi5gLFxuICAgICAgICAgICAgICAgIG1vZGlmeVJldHJ5OiAoXzogTWVzc2FnZSwgc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4gYCR7c3RyfVxcblxcblR5cGUgXFxgY2FuY2VsXFxgIHRvIGNhbmNlbCB0aGUgY29tbWFuZC4uLmAsXG4gICAgICAgICAgICAgICAgdGltZW91dDogXCJUaW1lIEVycm9yXCIsXG4gICAgICAgICAgICAgICAgZW5kZWQ6IFwiVHlwZSBBZ2FpbiBUaGlzIENvbW1hbmQhXCIsXG4gICAgICAgICAgICAgICAgY2FuY2VsOiBcIkNvbW1hbmQgQ2FuY2VsZWRcIixcbiAgICAgICAgICAgICAgICByZXRyaWVzOiAzLFxuICAgICAgICAgICAgICAgIHRpbWU6IDNlNFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG90aGVyd2lzZTogXCJcIlxuICAgICAgICB9LFxuICAgICAgICBpZ25vcmVQZXJtaXNzaW9uczogb3duZXJzXG4gICAgfSk7XG5cbiAgICBwdWJsaWMgY29uc3RydWN0b3IoY29uZmlnOiBCb3RPcHRpb25zKSB7XG4gICAgICBzdXBlcih7XG4gICAgICAgICAgb3duZXJJRDogY29uZmlnLm93bmVyc1xuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIH1cblxuICAgIHByaXZhdGUgYXN5bmMgX2luaXQoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMuY29tbWFuZEhhbmRsZXIudXNlTGlzdGVuZXJIYW5kbGVyKHRoaXMubGlzdGVuZXJIYW5kbGVyKTtcbiAgICAgICAgdGhpcy5saXN0ZW5lckhhbmRsZXIuc2V0RW1pdHRlcnMoe1xuICAgICAgICAgICAgY29tbWFuZEhhbmRsZXI6IHRoaXMuY29tbWFuZEhhbmRsZXIsXG4gICAgICAgICAgICBsaXN0ZW5lckhhbmRsZXI6IHRoaXMubGlzdGVuZXJIYW5kbGVyLFxuICAgICAgICAgICAgcHJvY2Vzc1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmNvbW1hbmRIYW5kbGVyLmxvYWRBbGwoKTtcbiAgICAgICAgdGhpcy5saXN0ZW5lckhhbmRsZXIubG9hZEFsbCgpO1xuXG4gICAgICAgIHRoaXMuZGIgPSBEYXRhYmFzZS5nZXQoZGJOYW1lKVxuICAgICAgICBhd2FpdCB0aGlzLmRiLmNvbm5lY3QoKVxuICAgICAgICBhd2FpdCB0aGlzLmRiLnN5bmNocm9uaXplKClcbiAgICB9XG5cbiAgICBwdWJsaWMgYXN5bmMgc3RhcnQoKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgYXdhaXQgdGhpcy5faW5pdCgpO1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dpbih0aGlzLmNvbmZpZy50b2tlbilcbiAgICB9XG59Il19