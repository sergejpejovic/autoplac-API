import dbConnection from "../common/db-connection";
import vehicleImagesRepository from "../repositories/vehicle-images-repository";

const getVehicleImagesByVehicleId = async (vehicleId: number) => {
  const data = await vehicleImagesRepository.getVehicleImagesByVehicleId(
    vehicleId
  );
  return data;
};

const createImage = async (vehicleId: number, mediaLocation: string) => {
  const data = await vehicleImagesRepository.createImage(
    vehicleId,
    mediaLocation
  );
  return data;
};

const deleteByVehicleId = async (vehicleId: number) => {
  const data = await vehicleImagesRepository.deleteByVehicleId(vehicleId);
  return data;
};

const deleteFromMediaLocation = async (id: number) => {
  const data = await vehicleImagesRepository.deleteFromMediaLocation(id);
  return data;
};

export default {
  createImage,
  getVehicleImagesByVehicleId,
  deleteByVehicleId,
  deleteFromMediaLocation,
};
