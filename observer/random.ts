import { ObserverInterface, RandomObjectWithObserver } from "./types";

class Random implements RandomObjectWithObserver {
  observers: ObserverInterface[];
  constructor() {
    this.observers = [];
  }
  private randomInteger(min: number, max: number) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }
  random() {
    const result = this.randomInteger(0, 1);
    this.notification();
    return result;
  }
  addObserver(observer: ObserverInterface) {
    this.observers.push(observer);
  }
  notification() {
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}

export default Random;
