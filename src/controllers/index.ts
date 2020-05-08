import {Verb, Controller } from "../POO/express";

import v1 from "./v1";
const Server = new Controller("/")

Server.addVerb( Verb.get,"/test", (req:any, res:any) => {
    return res.send("testing get message")
})

Server.addVerb( Verb.get,"/", (req:any, res:any) => {
    return res.sendFile("/home/erick/Practicas/servidor-typescript-expres/public/index.html")
})

const RestApi = new Controller("/api")
RestApi.addController(v1)
Server.addController(RestApi)

export { Server }