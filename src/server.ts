import "dotenv/config"
import {configExpress, mongoDBConfig } from "./config/config"
import { AppExpress } from "./POO/express/";
import { MongoDB } from "./POO/mongoose/index";
import { Server } from "./controllers/index";

(async () => {

    const db_mongo = new MongoDB(mongoDBConfig)
    await db_mongo.connect()
})();
const app = new AppExpress(configExpress, Server)
const io = require("socket.io")(app.http)

// whenever a user connects on port 3000 via
// a websocket, log that a user has connected
io.on("connection", function(socket: any) {
    console.log("a user connected");
});
  
app.listen()
