interface HouseInterface {
  windows: number;
  doors: number;
  walls: number;
}

interface BuildHouseInterface {
  house: HouseInterface;
  addWindow: () => this;
  addDoor: () => this;
  addWall: () => this;
  build: () => HouseInterface;
}

export { HouseInterface, BuildHouseInterface };
