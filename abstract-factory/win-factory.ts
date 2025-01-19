import { Button, Checkbox, GUIFactory } from "./types";

class WinButton implements Button {
  text: string;
  onCLick: () => void;
  constructor() {
    this.text = "Win";
    this.onCLick = () => {
      console.log("Win");
    };
  }
}

class WinCheckbox implements Checkbox {
  style: string;
  constructor() {
    this.style = "color: blue";
  }
}

class WinFactory implements GUIFactory {
  createButton: () => Button;
  createCheckbox: () => Checkbox;
  constructor() {
    this.createButton = () => new WinButton();
    this.createCheckbox = () => new WinCheckbox();
  }
}

export { WinFactory };
