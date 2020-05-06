import Controller from "../models/native/classes/Controller";
import Verb from "../models/native/enums/verb.enum";
import v1 from "./v1";
const Server = new Controller("/")

Server.addVerb( Verb.get,"/test", (req:any, res:any) => {
    return res.send("testing get message")
})

Server.addVerb( Verb.get,"/", (req:any, res:any) => {
    return res.send("default response")
})

const RestApi = new Controller("/api")
RestApi.addController(v1)
Server.addController(RestApi)

export { Server }