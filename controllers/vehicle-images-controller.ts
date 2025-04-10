import { Request, Response } from "express";
import vehicleImageService from "../services/vehicle-image-service";

const getVehicleImagesByVehicleId = async (req: Request, res: Response) => {
  const vehicleId = req.params.id;
  const data = await vehicleImageService.getVehicleImagesByVehicleId(
    parseInt(vehicleId)
  );
  res.send(data);
};

const createImage = async (req: Request, res: Response) => {
  const vehicleId = req.params.id;
  const data = await vehicleImageService.createImage(
    parseInt(vehicleId),
    req.body.mediaLocation
  );
  res.send(data);
};

const deleteByVehicleId = async (req: Request, res: Response) => {
  const vehicleId = req.params.id;
  const data = await vehicleImageService.deleteByVehicleId(parseInt(vehicleId));
  res.send(data);
};

const deleteFromMediaLocation = async (req: Request, res: Response) => {
  const id = req.params.id;
  const data = await vehicleImageService.deleteFromMediaLocation(parseInt(id));
  res.send(data);
};

export default {
  createImage,
  getVehicleImagesByVehicleId,
  deleteByVehicleId,
  deleteFromMediaLocation,
};
