import dbConnection from "../common/db-connection";

const getAllVehicles = async () => {
  try {
    const data = await dbConnection.query(`SELECT 
  v.id,
  v.user_id AS userId,
  vt.name AS type,
  v.title,
  b.name AS brand,
  m.name AS model,
  v.year,
  v.price,
  v.mileage,
  f.name AS fuel,
  t.name AS transmission,
  bt.name AS bodyType,
  v.color,
  es.size AS engineSize,
  v.hp,
  v.description,
  V.thumbnail,
  v.created_at AS createdAt
FROM vehicles v
JOIN vehicleType vt ON v.type_id = vt.id
JOIN brand b ON v.brand_id = b.id
JOIN model m ON v.model_id = m.id
JOIN fuel f ON v.fuel_id = f.id
JOIN transmission t ON v.transmission_id = t.id
JOIN bodyType bt ON v.body_type_id = bt.id
JOIN engineSize es ON v.engine_size_id = es.id
`);
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getVehicleById = async (id: number) => {
  try {
    const data = await dbConnection.query(
      `SELECT 
        v.id,
        v.user_id AS userId,
        vt.name AS type,
        v.title,
        b.name AS brand,
        m.name AS model,
        v.year,
        v.price,
        v.mileage,
        f.name AS fuel,
        t.name AS transmission,
        bt.name AS bodyType,
        v.color,
        es.size AS engineSize,
        v.hp,
        v.description,
         V.thumbnail,
        v.created_at AS createdAt
      FROM vehicles v
      JOIN vehicleType vt ON v.type_id = vt.id
      JOIN brand b ON v.brand_id = b.id
      JOIN model m ON v.model_id = m.id
      JOIN fuel f ON v.fuel_id = f.id
      JOIN transmission t ON v.transmission_id = t.id
      JOIN bodyType bt ON v.body_type_id = bt.id
      JOIN engineSize es ON v.engine_size_id = es.id
      WHERE v.id = ?`,
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
      `
      SELECT 
        v.id,
        v.user_id AS userId,
        vt.name AS type,
        v.title,
        b.name AS brand,
        m.name AS model,
        v.year,
        v.price,
        v.mileage,
        f.name AS fuel,
        t.name AS transmission,
        bt.name AS bodyType,
        v.color,
        es.size AS engineSize,
        v.hp,
        v.description,
         V.thumbnail,
        v.created_at AS createdAt
      FROM vehicles v
      JOIN vehicleType vt ON v.type_id = vt.id
      JOIN brand b ON v.brand_id = b.id
      JOIN model m ON v.model_id = m.id
      JOIN fuel f ON v.fuel_id = f.id
      JOIN transmission t ON v.transmission_id = t.id
      JOIN bodyType bt ON v.body_type_id = bt.id
      JOIN engineSize es ON v.engine_size_id = es.id
      WHERE v.user_id = ?
      `,
      [userId]
    );
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getUserByVehicleId = async (vehicleId: number) => {
  try {
    const data = await dbConnection.query(
      `
      SELECT u.username, u.email, u.contact, u.is_admin, u.created_at
     FROM vehicles v
     JOIN users u ON v.user_id = u.id
     WHERE v.id = ?
      `,
      [vehicleId]
    );

    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const createNewVehicle = async (vehicle: any) => {
  try {
    const data = await dbConnection.query(
      "INSERT INTO vehicles (user_id,type_id,title,brand_id,model_id,year,price,mileage,fuel_id,transmission_id,body_type_id,color,engine_size_id,hp,description, thumbnail) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
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
        vehicle.thumbnail,
      ]
    );
    const vehicleId = data.insertId;

    return { success: true, vehicleId, data };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const updateVehicle = async (id: number, vehicle: any) => {
  try {
    const data = await dbConnection.query(
      `UPDATE vehicles SET user_id =?, type_id =?, title = ?, brand_id = ?, model_id =?, year =?, price =?, mileage =?, fuel_id =?, transmission_id =?, body_type_id =?, color =?, engine_size_id =?, hp = ?, description =?, thumbnail = ? WHERE id = ?`,
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
        vehicle.thumbnail,
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
  getUserByVehicleId,
  createNewVehicle,
  updateVehicle,
  deleteVehicle,
};
