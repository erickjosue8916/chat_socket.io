import Controller from "../../models/native/classes/Controller";
import Verb from "../../models/native/enums/verb.enum";
import { getUser, getUsers, createUser, updateUser, deleteUser } from "./user.controller";
const UserController = new Controller("/users") 
UserController.addVerb(Verb.get, "/", getUsers )
UserController.addVerb(Verb.get, "/:id", getUser )

export { UserController }