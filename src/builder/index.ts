import Builder from "./builder";

const builder = new Builder();
const house = builder.addDoor().addWindow().addWall().addDoor().build();

console.log("house with 5 walls:", house.walls === 5);
