import { Router } from "express";
import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { ListUserController } from "../modules/accounts/useCases/listUsers/ListUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

usersRoutes.post("/", createUserController.handle);
usersRoutes.get("/", listUserController.handle);
export { usersRoutes };
