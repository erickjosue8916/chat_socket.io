import express from  "express";
import morgan from "morgan";
import ExpressConfig from "./expressConfig.interface";
import Controller from "./Controller";
import cors from "cors";
import path from "path";
import http from "http";
class AppExpress {
    public app:express.Application;
    public config:ExpressConfig;
    public http:any;
    constructor(config:ExpressConfig, constrollers:Controller) {
        this.app = express();
        this.config = config
        this.initializateMiddlewares()
        this.initializateControllers(constrollers)
        this.http = http.createServer(this.app)
        
    }

    private initializateMiddlewares() {
        this.app.use(express.json())
        this.app.use(cors())
        console.log(__dirname)
        this.app.use("/public", express.static("public"))
        if (this.config.environment === "dev") this.app.use(morgan("dev"))
    }

    private initializateControllers(controllers:Controller) {   
        this.app.use(controllers.path, controllers.router)
    }

    public listen() {
        this.http.listen(this.config.port, () => {
            console.log(`App listening on the port ${this.config.port}`)
        })
    }
}

export default AppExpress