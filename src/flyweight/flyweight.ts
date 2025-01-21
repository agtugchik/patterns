import {
  FlyweightFactoryInterface,
  FlyweightInterface,
  FlyweightSharedState,
  FlyweightUniqueState,
} from "./types";

class Flyweight implements FlyweightInterface {
  private sharedState: FlyweightSharedState;
  private getSharedState() {
    return `${this.sharedState.brand} ${this.sharedState.model} ${this.sharedState.color}`;
  }
  private getUniqueState(uniqueState: FlyweightUniqueState) {
    return `${uniqueState.plates} ${uniqueState.owner}`;
  }

  constructor(sharedState: FlyweightSharedState) {
    this.sharedState = sharedState;
  }

  operation(uniqueState: FlyweightUniqueState) {
    return `${this.getSharedState()} ${this.getUniqueState(uniqueState)}`;
  }
}

class FlyweightFactory implements FlyweightFactoryInterface {
  private flyweights: { [key: string]: Flyweight } = {};
  private getKey(state: FlyweightSharedState) {
    return `${state.brand}_${state.model}_${state.color}`;
  }

  constructor(initialFlyweights: FlyweightSharedState[]) {
    for (const state of initialFlyweights) {
      this.flyweights[this.getKey(state)] = new Flyweight(state);
    }
  }

  getFlyweight(sharedState: FlyweightSharedState) {
    const key = this.getKey(sharedState);

    if (!(key in this.flyweights)) {
      this.flyweights[key] = new Flyweight(sharedState);
    } else console.log("Get from cache");

    return this.flyweights[key];
  }
}

export default FlyweightFactory;
