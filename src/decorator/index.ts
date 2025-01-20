import Calculator from "./calculator";
import decorator from "./decorator";

const calc = new Calculator();
decorator(calc, "add");
calc.add(1, 2);
