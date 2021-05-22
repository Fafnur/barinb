import { BuildingEntity, NewBuilding } from '../interfaces/building.interface';

export function createBuildingFromNewBuilding(buildings: BuildingEntity[], newBuilding: NewBuilding): BuildingEntity {
  let lastId = 1;
  buildings?.forEach((building) => {
    if (building.id > lastId) {
      lastId = building.id;
    }
  });
  const created = new Date().toISOString();

  return {
    ...newBuilding,
    id: lastId + 1,
    created,
    updated: created,

    buildingRemoveRun: false,
    buildingRemoveError: null,
    buildingChangeError: null,
    buildingChangeRun: false,
  };
}
