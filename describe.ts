import { Printer } from "./Printer"

export function describe(type: string, printer: Printer) {
  const describe = function (description: string, callback: () => void | Promise<void>) {
    printer.indent()
    printer.log(`${type}: ${description}`)
    callback()
    printer.unindent()
  }
  describe.skip = function (description: string, _: () => void | Promise<void>) {
    printer.indent()
    printer.skip(`${type}: ${description}`)
    printer.unindent()
  }
  return describe
}
