import Prototype from "./prototype";

const prototype = new Prototype();
const clone = prototype.clone();

console.log(prototype.obj["obj"] === clone.obj["obj"]);
