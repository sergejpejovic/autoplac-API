import express from "express";
import additionalsController from "../controllers/additionals-controller";

const additionalRouter = express.Router();

additionalRouter
  .route("/vehicleTypes")
  .get(additionalsController.getAllVehicleTypes);

additionalRouter.route("/brands").get(additionalsController.getAllBrands);

additionalRouter.route("/models").get(additionalsController.getAllModels);

additionalRouter.route("/fuels").get(additionalsController.getAllfuels);

additionalRouter
  .route("/transmissions")
  .get(additionalsController.getAllTransmissions);

additionalRouter.route("/bodyTypes").get(additionalsController.getAllBodyTypes);

additionalRouter
  .route("/engineSizes")
  .get(additionalsController.getAllEngineSizes);

export default additionalRouter;
