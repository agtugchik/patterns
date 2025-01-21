import { UnusableObject, UsableObject } from "./types";

class Usable implements UsableObject {
  use() {
    return "User can use me";
  }
}

class Unusable implements UnusableObject {
  specificUse() {
    return ["User", "cant", "use", "me"];
  }
}

class Adapter implements UsableObject {
  use: () => string;
  constructor(unusable: UnusableObject) {
    this.use = () => unusable.specificUse().join(" ");
  }
}

export { Unusable, Usable };

export default Adapter;
