import { owners, token } from './Config'
import BotClient from './client/BotClient';

const client: BotClient = new BotClient({ token, owners });
client.start();