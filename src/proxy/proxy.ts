import { ProxyHandler } from "./types";

class CustomProxy {
  private result = {};
  constructor(target: Object, handler: ProxyHandler) {
    const descriptors = Object.getOwnPropertyDescriptors(target);
    const keys = Object.keys(descriptors);

    keys.forEach((key) =>
      Object.defineProperty(this.result, key, {
        enumerable: descriptors[key].enumerable,
        configurable: descriptors[key].configurable,
        get() {
          if (handler.get) return handler.get(target, key);
          return target[key];
        },
        set(value) {
          if (handler.set) handler.set(target, key, value);
          else target[key] = value;
        },
      })
    );
    return this.result as CustomProxy;
  }
}

export default CustomProxy;
