import { PrototypeInterface } from "./types";
import { fixReferences, isPrimitive } from "./helpers";

class Prototype implements PrototypeInterface {
  obj: Object;
  constructor() {
    this.obj = { value: 1, obj: { value: 2 } };
  }
  clone() {
    const clone = Object.create(this);
    fixReferences(clone);
    return clone;
  }
}

export default Prototype;
