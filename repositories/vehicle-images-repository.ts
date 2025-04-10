import dbConnection from "../common/db-connection";

const getVehicleImagesByVehicleId = async (vehicleId: number) => {
  try {
    const data = await dbConnection.query(
      `SELECT vehicle_images.id, vehicle_images.mediaLocation
         FROM vehicle_images
         WHERE vehicle_images.vehicle_id = ?`,
      [vehicleId]
    );
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const createImage = async (vehicleId: number, mediaLocation: string) => {
  try {
    const data = await dbConnection.query(
      "INSERT INTO vehicle_images (vehicle_id, mediaLocation) VALUES (?, ?)",
      [vehicleId, mediaLocation]
    );
    return { success: true, data };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const deleteFromMediaLocation = async (id: number) => {
  try {
    const data = await dbConnection.query(
      "DELETE FROM vehicle_images WHERE id =?",
      [id]
    );
    return { success: true, data };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const deleteByVehicleId = async (vehicleId: number) => {
  try {
    const data = await dbConnection.query(
      `DELETE FROM vehicle_images WHERE vehicle_id =?`,
      [vehicleId]
    );
    return { success: true, data };
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

export default {
  createImage,
  getVehicleImagesByVehicleId,
  deleteByVehicleId,
  deleteFromMediaLocation,
};
