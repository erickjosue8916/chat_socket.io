import  { ExpressConfig }  from "../POO/express";

const configExpress:ExpressConfig ={
    port: process.env.PORT || 5000,
    environment: "dev"
}

export {configExpress} 