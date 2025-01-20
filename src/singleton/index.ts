import Singleton from "./singleton";

const firstInstnace = new Singleton();
const secondInstnace = new Singleton();
console.log(
  "\nsingleton instances are the same:",
  firstInstnace === secondInstnace
);
