import additionalsService from "../services/additionals-service";
import { Request, Response } from "express";

const getAllVehicleTypes = async (req: Request, res: Response) => {
  const data = await additionalsService.getAllVehicleTypes();
  console.log(data);
  res.send(data);
};

const getAllBrands = async (req: Request, res: Response) => {
  const data = await additionalsService.getAllBrands();
  res.send(data);
};

const getAllModels = async (req: Request, res: Response) => {
  const data = await additionalsService.getAllModels();
  res.send(data);
};

const getAllfuels = async (req: Request, res: Response) => {
  const data = await additionalsService.getAllfuels();
  res.send(data);
};

const getAllTransmissions = async (req: Request, res: Response) => {
  const data = await additionalsService.getAllTransmissions();
  res.send(data);
};

const getAllBodyTypes = async (req: Request, res: Response) => {
  const data = await additionalsService.getAllBodyTypes();
  res.send(data);
};

const getAllEngineSizes = async (req: Request, res: Response) => {
  const data = await additionalsService.getAllEngineSizes();
  res.send(data);
};

export default {
  getAllVehicleTypes,
  getAllBrands,
  getAllModels,
  getAllfuels,
  getAllTransmissions,
  getAllBodyTypes,
  getAllEngineSizes,
};
