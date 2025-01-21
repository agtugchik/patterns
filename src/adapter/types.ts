interface UsableObject {
  use: () => string;
}

interface UnusableObject {
  specificUse: () => string[];
}

export { UsableObject, UnusableObject };
