import Observer from "./observer";
import Random from "./random";

const observer = new Observer();
const obj = new Random();
obj.addObserver(observer);
obj.random();
