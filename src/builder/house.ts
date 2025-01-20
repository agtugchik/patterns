import { HouseInterface } from "./types";

class House implements HouseInterface {
  windows: number;
  doors: number;
  walls: number;
  constructor() {
    this.windows = 0;
    this.walls = 4;
    this.doors = 1;
  }
}

export default House;
