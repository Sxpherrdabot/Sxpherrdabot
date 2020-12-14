"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
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
        });
    }
    exec(message) {
        return message.channel.send('Pong!');
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluZ0NvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvcHVibGljL1BpbmdDb21tYW5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsbURBQXdDO0FBR3hDLE1BQXFCLFdBQVksU0FBUSx3QkFBTztJQUM1QztRQUNJLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDVixPQUFPLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDakIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxjQUFjO2dCQUN2QixLQUFLLEVBQUUsTUFBTTtnQkFDYixRQUFRLEVBQUU7b0JBQ04sT0FBTztpQkFDVjthQUNKO1lBQ0QsU0FBUyxFQUFFLENBQUM7U0FDZixDQUFDLENBQUE7SUFDTixDQUFDO0lBRU0sSUFBSSxDQUFDLE9BQWdCO1FBQ3hCLE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDeEMsQ0FBQztDQUNKO0FBbkJELDhCQW1CQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1hbmQgfSBmcm9tICdkaXNjb3JkLWFrYWlybydcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICdkaXNjb3JkLmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQaW5nQ29tbWFuZCBleHRlbmRzIENvbW1hbmQge1xuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoXCJwaW5nXCIsIHtcbiAgICAgICAgICAgIGFsaWFzZXM6IFtcInBpbmdcIl0sXG4gICAgICAgICAgICBjYXRlZ29yeTogXCJwdWJsaWNcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB7XG4gICAgICAgICAgICAgICAgY29udGVudDogXCJQaW5nIENvbW1hbmRcIixcbiAgICAgICAgICAgICAgICB1c2FnZTogXCJwaW5nXCIsXG4gICAgICAgICAgICAgICAgZXhhbXBsZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgXCIhcGluZ1wiXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJhdGVsaW1pdDogM1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHB1YmxpYyBleGVjKG1lc3NhZ2U6IE1lc3NhZ2UpOiBQcm9taXNlPE1lc3NhZ2U+IHtcbiAgICAgICAgcmV0dXJuIG1lc3NhZ2UuY2hhbm5lbC5zZW5kKCdQb25nIScpXG4gICAgfVxufSJdfQ==