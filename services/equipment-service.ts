import equipmentRepository from "../repositories/equipment-repository";

const getAllEquipment = async () => {
  const data = await equipmentRepository.getAllEquipment();
  const result: any = [];

  data.forEach((equipment: any) => {
    result.push({
      id: equipment.id,
      name: equipment.name,
    });
  });
  return result;
};

const getAllEquipmentByVehicleId = async (vehicleId: number) => {
  const data = await equipmentRepository.getAllEquipmentByVehicleId(vehicleId);
  const result: any = [];

  data.forEach((equipment: any) => {
    result.push({
      id: equipment.id,
      name: equipment.name,
    });
  });
  return result;
};

const addEquipmentToVehicle = async (
  vehicleId: number,
  equipmentIds: number[]
) => {
  const data = await equipmentRepository.addEquipmentToVehicle({
    vehicleId,
    equipmentIds,
  });
  return data;
};

export default {
  getAllEquipment,
  getAllEquipmentByVehicleId,
  addEquipmentToVehicle,
};
