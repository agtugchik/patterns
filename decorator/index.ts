import { Decorator } from "./types";

const consoleLogDecorator: Decorator<number> = (obj, method) => {
  const oldMethod = obj[method];
  obj[method] = (...args) => {
    const result = oldMethod(...args);
    console.log(
      `\nmethod ${method} called with args (${args.join(
        ", "
      )}) result: ${result}`
    );
    return result;
  };
};

export default consoleLogDecorator;
