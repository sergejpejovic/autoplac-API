import dbConnection from "../common/db-connection";

const getAllVehicles = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM vehicles");
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

export default { getAllVehicles, getVehicleById, getVehicleByUserId };
