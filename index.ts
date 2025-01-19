import Singleton from "./singleton";
import AbstractFactory from "./abstract-factory";
import { Factories } from "./abstract-factory/types";

//singleton test
const firstInstnace = new Singleton();
const secondInstnace = new Singleton();
console.log(
  "singleton instances are the same:",
  firstInstnace === secondInstnace
);

//abstract-factory test
const winFactory = new AbstractFactory(Factories.Win);
const winButton = JSON.stringify(winFactory.factory.createButton());
const winCheckbox = JSON.stringify(winFactory.factory.createCheckbox());
console.log("\nwin button:", winButton, "\nwin checkbox", winCheckbox);

const macFactory = new AbstractFactory(Factories.Mac);
const macButton = JSON.stringify(macFactory.factory.createButton());
const macCheckbox = JSON.stringify(macFactory.factory.createCheckbox());
console.log("\nmac button:", macButton, "\nmac checkbox", macCheckbox);
