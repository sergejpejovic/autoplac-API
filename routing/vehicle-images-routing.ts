import express from "express";
import vehicleImagesController from "../controllers/vehicle-images-controller";

const vehicleImagesRouter = express.Router();

vehicleImagesRouter
  .route("/:id/upload")
  .post(vehicleImagesController.createImage);

vehicleImagesRouter
  .route("/images/:id")
  .get(vehicleImagesController.getVehicleImagesByVehicleId);

vehicleImagesRouter
  .route("/:id")
  .delete(vehicleImagesController.deleteByVehicleId);

vehicleImagesRouter
  .route("/media/:id")
  .delete(vehicleImagesController.deleteFromMediaLocation);

export default vehicleImagesRouter;
