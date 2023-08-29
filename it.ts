import { Chainable } from "./Chainable";
import { Printer } from "./Printer";

export function it<T>(printer: Printer) {
  return function (actual: T) {
  return new Chainable(printer, actual)
}

} 