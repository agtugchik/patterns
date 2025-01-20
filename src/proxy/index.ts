import CustomProxy from "./proxy";
import { ProxyHandler } from "./types";

const handler: ProxyHandler = {
  set(target, prop, value) {
    target[prop] = value;
    console.log("SET VALUE:", value);
  },
  get(target, name) {
    console.log("GET VALUE:", target[name]);
    return target[name];
  },
};

const array = [0, 1, 2];
const proxyArray = new CustomProxy(array, handler);

proxyArray[2] = 11;
proxyArray[2];
