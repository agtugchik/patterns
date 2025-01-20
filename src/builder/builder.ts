import House from "./house";
import { BuildHouseInterface, HouseInterface } from "./types";

class Builder implements BuildHouseInterface {
  house: HouseInterface;
  constructor() {
    this.house = new House();
  }
  addWindow() {
    this.house.windows += 1;
    return this;
  }
  addDoor() {
    this.house.doors += 1;
    return this;
  }
  addWall() {
    this.house.walls += 1;
    return this;
  }
  build() {
    return this.house;
  }
}

export default Builder;
