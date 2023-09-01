import { Chainable } from "./Chainable"
import { Printer } from "./Printer"

declare global {
  var Scenario: {
    (description: string, callback: () => void): void
    skip(description: string, callback: () => void): void
  }

  var Given: {
    (description: string, callback: () => void): void
    skip(description: string, callback: () => void): void
  }

  var When: {
    (description: string, callback: () => void): void
    skip(description: string, callback: () => void): void
  }

  var Then: <T>(actual: T) => Chainable<T>

  var printer: Printer
}

export { }