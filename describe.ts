import { Printer } from "./Printer"

export function describe(type: string, printer: Printer) {
  return function (description: string, callback: () => void | Promise<void>) {
    printer.indent()
    printer.log(`${type}: ${description}`)
    callback()
    printer.unindent()
  }
}
