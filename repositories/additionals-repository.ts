import dbConnection from "../common/db-connection";

const getAllVehicleTypes = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM vehicleType");
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getAllBrands = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM brand");
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getAllModels = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM model");
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getAllfuels = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM fuel");
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getAllTransmissions = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM transmission");
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getAllBodyTypes = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM bodyType");
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
};

const getAllEngineSizes = async () => {
  try {
    const data = await dbConnection.query("SELECT * FROM engineSize");
    return data;
  } catch (error: any) {
    return { success: false, msg: error.message };
  }
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
