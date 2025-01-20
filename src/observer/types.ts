interface ObserverInterface {
  update: (random: RandomObjectWithObserver) => void;
}

interface RandomObjectWithObserver {
  observers: ObserverInterface[];
  random: () => number;
  addObserver: (observer: ObserverInterface) => void;
  notification: () => void;
}

export { RandomObjectWithObserver, ObserverInterface };
