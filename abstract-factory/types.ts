interface Button {
  text: string;
  onCLick: () => void;
}

interface Checkbox {
  style: string;
}

interface GUIFactory {
  createButton: () => Button;
  createCheckbox: () => Checkbox;
}

interface AbstractFactoryInterface {
  factory: GUIFactory;
}

const enum Factories {
  Win = "Win",
  Mac = "Mac",
}

export { Button, Checkbox, GUIFactory, Factories, AbstractFactoryInterface };
