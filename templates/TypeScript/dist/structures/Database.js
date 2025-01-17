"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Config_1 = require("../Config");
const connectionManager = new typeorm_1.ConnectionManager();
connectionManager.create({
    name: Config_1.dbName,
    type: "sqlite",
    database: "../db.sqlite",
});
exports.default = connectionManager;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGF0YWJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc3RydWN0dXJlcy9EYXRhYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHFDQUEyQztBQUMzQyxzQ0FBa0M7QUFHbEMsTUFBTSxpQkFBaUIsR0FBc0IsSUFBSSwyQkFBaUIsRUFBRSxDQUFDO0FBQ3JFLGlCQUFpQixDQUFDLE1BQU0sQ0FBQztJQUNyQixJQUFJLEVBQUUsZUFBTTtJQUNaLElBQUksRUFBRSxRQUFRO0lBQ2QsUUFBUSxFQUFFLGNBQWM7Q0FDM0IsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsaUJBQWlCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25uZWN0aW9uTWFuYWdlciB9IGZyb20gJ3R5cGVvcm0nXG5pbXBvcnQgeyBkYk5hbWUgfSBmcm9tICcuLi9Db25maWcnXG5cblxuY29uc3QgY29ubmVjdGlvbk1hbmFnZXI6IENvbm5lY3Rpb25NYW5hZ2VyID0gbmV3IENvbm5lY3Rpb25NYW5hZ2VyKCk7XG5jb25uZWN0aW9uTWFuYWdlci5jcmVhdGUoe1xuICAgIG5hbWU6IGRiTmFtZSxcbiAgICB0eXBlOiBcInNxbGl0ZVwiLFxuICAgIGRhdGFiYXNlOiBcIi4uL2RiLnNxbGl0ZVwiLFxufSlcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdGlvbk1hbmFnZXI7Il19