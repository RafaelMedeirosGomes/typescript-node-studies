import { Chainable } from "./Chainable"

declare global {
  var Scenario: {
    (description: string, callback: () => void): void
    skip(description: string, callback: () => void): void
  };
  var Given: {
    (description: string, callback: () => void): void
    skip(description: string, callback: () => void): void
  };
  var When: {
    (description: string, callback: () => void): void
    skip(description: string, callback: () => void): void
  };
  var Then: <T>(actual: T) => Chainable<T>;
}

export { }