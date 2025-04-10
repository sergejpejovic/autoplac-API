import additionalsRepository from "../repositories/additionals-repository";

const getAllVehicleTypes = async () => {
  const data = await additionalsRepository.getAllVehicleTypes();
  const result: any = [];

  data.forEach((vehicle: any) => {
    result.push({
      id: vehicle.id,
      name: vehicle.name,
    });
  });
  return result;
};

const getAllBrands = async () => {
  const data = await additionalsRepository.getAllBrands();
  const result: any = [];

  data.forEach((brand: any) => {
    result.push({
      id: brand.id,
      name: brand.name,
    });
  });
  return result;
};

const getAllModels = async () => {
  const data = await additionalsRepository.getAllModels();
  const result: any = [];

  data.forEach((model: any) => {
    result.push({
      id: model.id,
      name: model.name,
      brandId: model.brand_id,
    });
  });
  return result;
};

const getAllfuels = async () => {
  const data = await additionalsRepository.getAllfuels();
  const result: any = [];

  data.forEach((fuel: any) => {
    result.push({
      id: fuel.id,
      name: fuel.name,
    });
  });
  return result;
};

const getAllTransmissions = async () => {
  const data = await additionalsRepository.getAllTransmissions();
  const result: any = [];

  data.forEach((transmission: any) => {
    result.push({
      id: transmission.id,
      name: transmission.name,
    });
  });

  return result;
};

const getAllBodyTypes = async () => {
  const data = await additionalsRepository.getAllBodyTypes();
  const result: any = [];

  data.forEach((type: any) => {
    result.push({
      id: type.id,
      name: type.name,
    });
  });

  return result;
};

const getAllEngineSizes = async () => {
  const data = await additionalsRepository.getAllEngineSizes();
  const result: any = [];

  data.forEach((size: any) => {
    result.push({
      id: size.id,
      size: size.size,
    });
  });
  return result;
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
