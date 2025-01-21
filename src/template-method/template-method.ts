import { AbstractClass } from "./types";

class ConcreteClass1 extends AbstractClass {
  protected requiredOperations(): void {
    console.log("ConcreteClass1: implement required operations");
  }
}

class ConcreteClass2 extends AbstractClass {
  protected requiredOperations(): void {
    console.log("ConcreteClass2: implement required operations");
  }
  protected hook(): void {
    console.log("ConcreteClass2: override hook");
  }
}

export default { ConcreteClass1, ConcreteClass2 };
