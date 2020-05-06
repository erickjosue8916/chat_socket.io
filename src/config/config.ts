import  ExpressConfig  from "../models/native/interfaces/expressConfig.interface";
const configExpress:ExpressConfig ={
    port: process.env.PORT || 5000,
    environment: "dev"
}
const config = {
    port:  process.env.PORT || 5000,
    env: process.env.ENVIROMENT || "dev"
}

export {configExpress} 