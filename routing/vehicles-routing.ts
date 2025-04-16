import express from "express";
import vehiclesController from "../controllers/vehicles-controller";
import authMiddleware from "../middleware/auth-middleware";

const vehiclesRouter = express.Router();

vehiclesRouter
  .route("/")
  .get(vehiclesController.getAllVehicles)
  .post(authMiddleware, vehiclesController.createNewVehicle);

vehiclesRouter
  .route("/:id")
  .get(vehiclesController.getVehicleById)
  .put(authMiddleware, vehiclesController.updateVehicle)
  .delete(authMiddleware, vehiclesController.deleteVehicle);

vehiclesRouter.route("/user/:id").get(vehiclesController.getVehicleByUserId);

export default vehiclesRouter;
