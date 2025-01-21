interface FlyweightSharedState {
  brand: string;
  model: string;
  color: string;
}

interface FlyweightUniqueState {
  owner: string;
  plates: string;
}

interface FlyweightInterface {
  operation: (uniqueState: FlyweightUniqueState) => string;
}

interface FlyweightFactoryInterface {}

export {
  FlyweightInterface,
  FlyweightSharedState,
  FlyweightUniqueState,
  FlyweightFactoryInterface,
};
