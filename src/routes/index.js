import { Router } from "express";
import UserController from "../controllers/userControllers";
import TourController from "../controllers/tourControllers";

const route =Router();

route.post("/user/login",UserController.loginUserController);

route.post("/user/test",UserController.testController);

route.post("/user",UserController.registerUser);
route.post("/tours",TourController.createTour);

route.get("/user",UserController.getAll);
route.get("/tours",TourController.getAllTours);

route.delete("/user/:id",UserController.deleteUser);

route.patch("/user/:id",UserController.updateUser);
route.patch("/tours/:id",TourController.updateTour);



export default route;