import {configExpress} from "./config/config"
import App from "./models/native/classes/AppExpress";
import {Server} from "./controllers/index";

const app = new App(configExpress, Server)
app.listen()