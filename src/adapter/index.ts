import Adapter, { Unusable, Usable } from "./adapter";
import { UsableObject } from "./types";

const clientCode = (obj: UsableObject) => console.log(obj.use());

const usable = new Usable();
const unusable = new Unusable();
const usableUnusable = new Adapter(unusable);

clientCode(usable);
clientCode(usableUnusable);
