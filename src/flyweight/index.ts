import FlyweightFactory from "./flyweight";

const initialState = [
  { brand: "Chevrolet", model: "Camaro2018", color: "pink" },
  { brand: "Mercedes Benz", model: "C300", color: "black" },
  { brand: "Mercedes Benz", model: "C500", color: "red" },
  { brand: "BMW", model: "M5", color: "red" },
  { brand: "BMW", model: "X6", color: "white" },
];

const factory = new FlyweightFactory(initialState);

factory.getFlyweight(initialState[1]);
