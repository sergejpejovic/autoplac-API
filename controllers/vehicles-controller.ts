import { Request, Response } from "express";
import vehiclesService from "../services/vehicles-service";

const getAllVehicles = async (req: Request, res: Response) => {
  const data = await vehiclesService.getAllVehicles();
  res.send(data);
};

const getVehicleById = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await vehiclesService.getVehicleById(parseInt(id));
  res.send(data);
};

const getVehicleByUserId = async (req: Request, res: Response) => {
  const userId = req.params.id;
  const data = await vehiclesService.getVehicleByUserId(parseInt(userId));
  res.send(data);
};

const createNewVehicle = async (req: Request, res: Response) => {
  const data = await vehiclesService.createNewVehicle(req.body);
  res.send(data);
};

const updateVehicle = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await vehiclesService.updateVehicle(parseInt(id), req.body);
  res.send(data);
};

const deleteVehicle = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await vehiclesService.deleteVehicle(parseInt(id));
  res.send(data);
};

export default {
  getAllVehicles,
  getVehicleById,
  getVehicleByUserId,
  createNewVehicle,
  updateVehicle,
  deleteVehicle,
};
