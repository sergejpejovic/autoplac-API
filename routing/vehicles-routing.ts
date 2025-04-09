import express from "express";
import vehiclesController from "../controllers/vehicles-controller";

const vehiclesRouter = express.Router();

vehiclesRouter.route("/").get(vehiclesController.getAllVehicles);
vehiclesRouter.route("/:id").get(vehiclesController.getVehicleById);
vehiclesRouter.route("/user/:id").get(vehiclesController.getVehicleByUserId);

export default vehiclesRouter;
