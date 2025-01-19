import AbstractFactory from "./abstract-factory";
import { Factories } from "./types";

const winFactory = new AbstractFactory(Factories.Win);
const winButton = JSON.stringify(winFactory.factory.createButton());
const winCheckbox = JSON.stringify(winFactory.factory.createCheckbox());
console.log("\nwin button:", winButton, "\nwin checkbox", winCheckbox);

const macFactory = new AbstractFactory(Factories.Mac);
const macButton = JSON.stringify(macFactory.factory.createButton());
const macCheckbox = JSON.stringify(macFactory.factory.createCheckbox());
console.log("\nmac button:", macButton, "\nmac checkbox", macCheckbox);
