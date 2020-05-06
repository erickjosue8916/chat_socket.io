import {Verb, Controller } from "../../../POO/express";
import { getUser, getUsers, createUser, updateUser, deleteUser } from "./user.controller";
const UserController = new Controller("/users") 
UserController.addVerb(Verb.get, "/", getUsers )
UserController.addVerb(Verb.get, "/:id", getUser )
UserController.addVerb(Verb.post, "/", createUser )
UserController.addVerb(Verb.put, "/:id", updateUser )
UserController.addVerb(Verb.delete, "/:id", deleteUser )

export { UserController }