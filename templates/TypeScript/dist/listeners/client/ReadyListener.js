"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class ReadyListener extends discord_akairo_1.Listener {
    constructor() {
        super("ready", {
            emitter: "client",
            event: "ready",
            category: "client"
        });
    }
    exec() {
        this.client.user.setActivity('ts bot');
        console.log(`${this.client.user.tag} Is Online`);
    }
}
exports.default = ReadyListener;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUmVhZHlMaXN0ZW5lci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saXN0ZW5lcnMvY2xpZW50L1JlYWR5TGlzdGVuZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtREFBeUM7QUFFekMsTUFBcUIsYUFBYyxTQUFRLHlCQUFRO0lBQy9DO1FBQ0ksS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNYLE9BQU8sRUFBRSxRQUFRO1lBQ2pCLEtBQUssRUFBRSxPQUFPO1lBQ2QsUUFBUSxFQUFFLFFBQVE7U0FDckIsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVNLElBQUk7UUFDUCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUE7SUFDcEQsQ0FBQztDQUNKO0FBYkQsZ0NBYUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0ZW5lciB9IGZyb20gJ2Rpc2NvcmQtYWthaXJvJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWFkeUxpc3RlbmVyIGV4dGVuZHMgTGlzdGVuZXIge1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXCJyZWFkeVwiLCB7XG4gICAgICAgICAgICBlbWl0dGVyOiBcImNsaWVudFwiLFxuICAgICAgICAgICAgZXZlbnQ6IFwicmVhZHlcIixcbiAgICAgICAgICAgIGNhdGVnb3J5OiBcImNsaWVudFwiXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgcHVibGljIGV4ZWMoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY2xpZW50LnVzZXIuc2V0QWN0aXZpdHkoJ3RzIGJvdCcpXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY2xpZW50LnVzZXIudGFnfSBJcyBPbmxpbmVgKVxuICAgIH1cbn0iXX0=