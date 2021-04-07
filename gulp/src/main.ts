import {
  greet
} from "./greetings";

const greetFromCompiler = (greeting: string, compiler: string) => {
  return `${greeting} from ${compiler}!!`;
};

const showGreeting = (divID: string, message: string) => {
  const elem = document.getElementById(divID);
  elem.innerText = message;
};

const divID = "greeting";
const greeting = greet(1);
const compiler = "TyepScript";
const message = greetFromCompiler(greeting, compiler);
showGreeting(divID, message);

export {
  greetFromCompiler
};
