type Method<T> = (a: T, b: T) => T;

interface CalculatorInterface<T> {
  [key: string]: Method<T>;
}

type Decorator<T> = (obj: CalculatorInterface<T>, method: string) => void;

export { Method, CalculatorInterface, Decorator };
