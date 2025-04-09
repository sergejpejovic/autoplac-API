import dbConnection from "../common/db-connection";
import vehiclesRepository from "../repositories/vehicles-repository";

const getAllVehicles = async () => {
  const data = await vehiclesRepository.getAllVehicles();
  const result: any = [];

  data.forEach((vehicle: any) => {
    result.push({
      id: vehicle.id,
      userId: vehicle.user_id,
      type: vehicle.type,
      title: vehicle.title,
      brand: vehicle.brand,
      model: vehicle.model,
      year: vehicle.year,
      price: vehicle.price,
      mileage: vehicle.mileage,
      fuel: vehicle.fuel,
      transmission: vehicle.transmission,
      bodyType: vehicle.body_type,
      color: vehicle.color,
      engineSize: vehicle.engine_size,
      hp: vehicle.hp,
      description: vehicle.description,
      createdAt: vehicle.created_at,
    });
  });
  return result;
};

const getVehicleById = async (id: number) => {
  const data = await vehiclesRepository.getVehicleById(id);
  if (data && data.length > 0) {
    return {
      id: data[0].id,
      userId: data[0].user_id,
      type: data[0].type,
      title: data[0].title,
      brand: data[0].brand,
      model: data[0].model,
      year: data[0].year,
      price: data[0].price,
      mileage: data[0].mileage,
      fuel: data[0].fuel,
      transmission: data[0].transmission,
      bodyType: data[0].body_type,
      color: data[0].color,
      engineSize: data[0].engine_size,
      hp: data[0].hp,
      description: data[0].description,
      createdAt: data[0].created_at,
    };
  }
  return null;
};

const getVehicleByUserId = async (userId: number) => {
  const data = await vehiclesRepository.getVehicleByUserId(userId);
  if (data && data.length > 0) {
    return {
      id: data[0].id,
      userId: data[0].user_id,
      type: data[0].type,
      title: data[0].title,
      brand: data[0].brand,
      model: data[0].model,
      year: data[0].year,
      price: data[0].price,
      mileage: data[0].mileage,
      fuel: data[0].fuel,
      transmission: data[0].transmission,
      bodyType: data[0].body_type,
      color: data[0].color,
      engineSize: data[0].engine_size,
      hp: data[0].hp,
      description: data[0].description,
      createdAt: data[0].created_at,
    };
  }
  return null;
};

export default { getAllVehicles, getVehicleById, getVehicleByUserId };
