import { ObserverInterface, RandomObjectWithObserver } from "./types";

class Observer implements ObserverInterface {
  update(random: RandomObjectWithObserver) {
    console.log(`\n${random.constructor.name} use some method`);
  }
}

export default Observer;
