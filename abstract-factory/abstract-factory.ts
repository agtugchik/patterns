import { GUIFactory, Factories, AbstractFactoryInterface } from "./types";
import { WinFactory } from "./win-factory";
import { MacFactory } from "./mac-factory";

class AbstractFactory implements AbstractFactoryInterface {
  factory: GUIFactory;
  constructor(os: keyof typeof Factories) {
    if (os === Factories.Win) this.factory = new WinFactory();
    else if (os === Factories.Mac) this.factory = new MacFactory();
    else throw new Error("unknown os");
  }
}

export default AbstractFactory;
