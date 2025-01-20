import { Button, Checkbox, GUIFactory } from "./types";

class MacButton implements Button {
  text: string;
  onCLick: () => void;
  constructor() {
    this.text = "Mac";
    this.onCLick = () => {
      console.log("Mac");
    };
  }
}

class MacCheckbox implements Checkbox {
  style: string;
  constructor() {
    this.style = "color: gray";
  }
}

class MacFactory implements GUIFactory {
  createButton: () => Button;
  createCheckbox: () => Checkbox;
  constructor() {
    this.createButton = () => new MacButton();
    this.createCheckbox = () => new MacCheckbox();
  }
}

export { MacFactory };
