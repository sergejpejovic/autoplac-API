import dbConnection from "../common/db-connection";
import vehiclesRepository from "../repositories/vehicles-repository";

const getAllVehicles = async () => {
  const data = await vehiclesRepository.getAllVehicles();
  const result: any = [];

  data.forEach((vehicle: any) => {
    result.push({
      id: vehicle.id,
      userId: vehicle.userId,
      type: vehicle.type,
      title: vehicle.title,
      brand: vehicle.brand,
      model: vehicle.model,
      year: vehicle.year,
      price: vehicle.price,
      mileage: vehicle.mileage,
      fuel: vehicle.fuel,
      transmission: vehicle.transmission,
      bodyType: vehicle.bodyType,
      color: vehicle.color,
      engineSize: vehicle.engineSize,
      hp: vehicle.hp,
      description: vehicle.description,
      thumbnail: vehicle.thumbnail,
      createdAt: vehicle.createdAt,
    });
  });
  return result;
};

const getVehicleById = async (id: number) => {
  const data = await vehiclesRepository.getVehicleById(id);
  if (data && data.length > 0) {
    return {
      id: data[0].id,
      userId: data[0].userId,
      type: data[0].type,
      title: data[0].title,
      brand: data[0].brand,
      model: data[0].model,
      year: data[0].year,
      price: data[0].price,
      mileage: data[0].mileage,
      fuel: data[0].fuel,
      transmission: data[0].transmission,
      bodyType: data[0].bodyType,
      color: data[0].color,
      engineSize: data[0].engineSize,
      hp: data[0].hp,
      description: data[0].description,
      thumbnail: data[0].thumbnail,
      createdAt: data[0].createdAt,
    };
  }
  return null;
};

const getVehicleByUserId = async (userId: number) => {
  const data = await vehiclesRepository.getVehicleByUserId(userId);
  const result: any = [];

  data.forEach((vehicle: any) => {
    result.push({
      id: vehicle.id,
      userId: vehicle.userId,
      type: vehicle.type,
      title: vehicle.title,
      brand: vehicle.brand,
      model: vehicle.model,
      year: vehicle.year,
      price: vehicle.price,
      mileage: vehicle.mileage,
      fuel: vehicle.fuel,
      transmission: vehicle.transmission,
      bodyType: vehicle.bodyType,
      color: vehicle.color,
      engineSize: vehicle.engineSize,
      hp: vehicle.hp,
      description: vehicle.description,
      thumbnail: vehicle.thumbnail,
      createdAt: vehicle.createdAt,
    });
  });
  return result;
};

const getUserByVehicleId = async (vehicleId: number) => {
  const data = await vehiclesRepository.getUserByVehicleId(vehicleId);
  const result: any = [];

  data.forEach((user: any) => {
    result.push({
      username: user.username,
      email: user.email,
      contact: user.contact,
      isAdmin: user.is_admin,
      createdAt: user.created_at,
    });
  });
  return result;
};

const createNewVehicle = async (vehicle: any) => {
  const data = await vehiclesRepository.createNewVehicle(vehicle);
  return data;
};

const updateVehicle = async (id: number, vehicle: any) => {
  const data = await vehiclesRepository.updateVehicle(id, vehicle);
  return data;
};

const deleteVehicle = async (id: number) => {
  const data = await vehiclesRepository.deleteVehicle(id);
  return data;
};

export default {
  getAllVehicles,
  getVehicleById,
  getVehicleByUserId,
  getUserByVehicleId,
  createNewVehicle,
  updateVehicle,
  deleteVehicle,
};
