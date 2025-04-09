import express from "express";
import vehiclesController from "../controllers/vehicles-controller";

const vehiclesRouter = express.Router();

vehiclesRouter
  .route("/")
  .get(vehiclesController.getAllVehicles)
  .post(vehiclesController.createNewVehicle);

vehiclesRouter
  .route("/:id")
  .get(vehiclesController.getVehicleById)
  .put(vehiclesController.updateVehicle)
  .delete(vehiclesController.deleteVehicle);

vehiclesRouter.route("/user/:id").get(vehiclesController.getVehicleByUserId);

export default vehiclesRouter;
