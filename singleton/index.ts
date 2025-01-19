import { SingletonInterface } from "./types";

class Singleton implements SingletonInterface {
  private static instance: null | Singleton = null;
  value: string;
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
      this.value = "im singleton";
    }
    return Singleton.instance;
  }
}

export default Singleton;
