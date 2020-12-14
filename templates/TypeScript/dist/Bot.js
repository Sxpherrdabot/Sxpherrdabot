"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Config_1 = require("./Config");
const BotClient_1 = __importDefault(require("./client/BotClient"));
const client = new BotClient_1.default({ token: Config_1.token, owners: Config_1.owners });
client.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUF3QztBQUN4QyxtRUFBMkM7QUFFM0MsTUFBTSxNQUFNLEdBQWMsSUFBSSxtQkFBUyxDQUFDLEVBQUUsS0FBSyxFQUFMLGNBQUssRUFBRSxNQUFNLEVBQU4sZUFBTSxFQUFFLENBQUMsQ0FBQztBQUMzRCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBvd25lcnMsIHRva2VuIH0gZnJvbSAnLi9Db25maWcnXG5pbXBvcnQgQm90Q2xpZW50IGZyb20gJy4vY2xpZW50L0JvdENsaWVudCc7XG5cbmNvbnN0IGNsaWVudDogQm90Q2xpZW50ID0gbmV3IEJvdENsaWVudCh7IHRva2VuLCBvd25lcnMgfSk7XG5jbGllbnQuc3RhcnQoKTsiXX0=