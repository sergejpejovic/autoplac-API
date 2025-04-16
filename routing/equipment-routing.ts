import express from "express";
import equipmentController from "../controllers/equipment-controller";

const equipmentRouter = express.Router();

equipmentRouter
  .route("/")
  .get(equipmentController.getAllEquipment)
  .post(equipmentController.addEquipmentToVehicle);

equipmentRouter
  .route("/vehicle/:id")
  .get(equipmentController.getAllEquipmentByVehicleId);

export default equipmentRouter;
