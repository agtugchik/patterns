import { AbstractClass } from "./types";
import classes from "./template-method";

const { ConcreteClass1, ConcreteClass2 } = classes;

const clientCode = (abstractClass: AbstractClass) =>
  abstractClass.templateMethod();

clientCode(new ConcreteClass1());
clientCode(new ConcreteClass2());
