import { Printer } from "./Printer"

export class Chainable<T> {
  constructor(private printer: Printer, private actual: T) { }

  equal(expected: T) {
    this.printer.indent()

    if (this.actual !== expected) {
      this.printer.fail(`Expected ${this.actual} to be equal to ${expected}`)
    } else {
      this.printer.pass(`${this.actual} is equal to ${expected}`)
    }

    this.printer.unindent()
  }

  get be() {
    return this
  }

  get should() {
    return this
  }
}