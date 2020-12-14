import { ConnectionManager } from 'typeorm'
import { dbName } from '../Config'


const connectionManager: ConnectionManager = new ConnectionManager();
connectionManager.create({
    name: dbName,
    type: "sqlite",
    database: "../db.sqlite",
})

export default connectionManager;