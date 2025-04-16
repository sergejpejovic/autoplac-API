import { Request, Response } from "express";
import equipmentService from "../services/equipment-service";

const getAllEquipment = async (req: Request, res: Response) => {
  const data = await equipmentService.getAllEquipment();
  res.send(data);
};

const getAllEquipmentByVehicleId = async (req: Request, res: Response) => {
  const vehicleId = req.params.id;
  const data = await equipmentService.getAllEquipmentByVehicleId(
    parseInt(vehicleId)
  );
  res.send(data);
};

const addEquipmentToVehicle = async (req: Request, res: Response) => {
  const { vehicleId, equipmentIds } = req.body;
  const data = await equipmentService.addEquipmentToVehicle(
    vehicleId,
    equipmentIds
  );
  res.send(data);
};

export default {
  getAllEquipment,
  getAllEquipmentByVehicleId,
  addEquipmentToVehicle,
};
