import dbConnection from "../common/db-connection";

const getAllVehicles = async () => {
  try {
    const data = await dbConnection.query("SELECT * vehicles ");
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getVehicleById = async (id: number) => {
  try {
    const data = await dbConnection.query(
      "SELECT * FROM vehicles WHERE id = ?",
      [id]
    );
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getVehicleByUserId = async (userId: number) => {
  try {
    const data = await dbConnection.query(
      "SELECT * FROM vehicles WHERE user_id =?",
      [userId]
    );
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const createNewVehicle = async (vehicle: any) => {
  try {
    const data = await dbConnection.query(
      "INSERT INTO vehicles (user_id,type,title,brand,model,year,price,mileage,fuel,transmission,body_type,color,engine_size,hp,description) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        vehicle.userId,
        vehicle.type,
        vehicle.title,
        vehicle.brand,
        vehicle.model,
        vehicle.year,
        vehicle.price,
        vehicle.mileage,
        vehicle.fuel,
        vehicle.transmission,
        vehicle.bodyType,
        vehicle.color,
        vehicle.engineSize,
        vehicle.hp,
        vehicle.description,
      ]
    );
    return { success: true, data };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const updateVehicle = async (id: number, vehicle: any) => {
  try {
    const data = await dbConnection.query(
      `UPDATE vehicles SET user_id =?, type =?, title = ?, brand = ?, model =?, year =?, price =?, mileage =?, fuel =?, transmission =?, body_type =?, color =?, engine_size =?, hp = ?, description =? WHERE id = ?`,
      [
        vehicle.userId,
        vehicle.type,
        vehicle.title,
        vehicle.brand,
        vehicle.model,
        vehicle.year,
        vehicle.price,
        vehicle.mileage,
        vehicle.fuel,
        vehicle.transmission,
        vehicle.bodyType,
        vehicle.color,
        vehicle.engineSize,
        vehicle.hp,
        vehicle.description,
        id,
      ]
    );
    return { success: true, data };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const deleteVehicle = async (id: number) => {
  try {
    const data = await dbConnection.query("DELETE FROM vehicles WHERE id =?", [
      id,
    ]);
    return { success: true, data };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

export default {
  getAllVehicles,
  getVehicleById,
  getVehicleByUserId,
  createNewVehicle,
  updateVehicle,
  deleteVehicle,
};
