import dbConnection from "../common/db-connection";

const getAllEquipment = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM equipment");
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getAllEquipmentByVehicleId = async (vehicleId: number) => {
  try {
    const data = await dbConnection.query(
      `SELECT e.* FROM equipment e
     JOIN vehicle_equipment ve ON e.id = ve.equipment_id
     WHERE ve.vehicle_id = ?`,
      [vehicleId]
    );
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const addEquipmentToVehicle = async (equipment: {
  vehicleId: number;
  equipmentIds: number[];
}) => {
  try {
    const values = equipment.equipmentIds.map((id) => [
      equipment.vehicleId,
      id,
    ]);
    const data = await dbConnection.query(
      `
            INSERT INTO vehicle_equipment (vehicle_id, equipment_id) VALUES ?`,
      [values]
    );
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

export default {
  getAllEquipment,
  getAllEquipmentByVehicleId,
  addEquipmentToVehicle,
};
