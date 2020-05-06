import { UserController } from "./user";
import Controller from "../../models/native/classes/Controller";

const v1 = new Controller("/v1")
v1.addController(UserController)

export default v1