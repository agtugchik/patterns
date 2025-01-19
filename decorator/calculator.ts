import { CalculatorInterface, Method } from "./types";

class Calculator implements CalculatorInterface<number> {
  [key: string]: Method<number>;
  add(a: number, b: number) {
    return a + b;
  }
  sub(a: number, b: number) {
    return a - b;
  }
  mul(a: number, b: number) {
    return a * b;
  }
  div(a: number, b: number) {
    return a / b;
  }
}

export default Calculator;
