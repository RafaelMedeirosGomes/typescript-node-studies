export function Some<T extends {}>(value: T) {
  return new Option<T>(value)
}

export function None<T extends {}>() {
  return new Option<T>(null)
}

class Option<T extends {}> {
  private value: T | null

  constructor(value: T | null) {
    this.value = value
  }

  and<U extends {}>(other: Option<U>): Option<U> {
    if (this.value === null) {
      return this as any as Option<U>
    }

    return other
  }

  andThen<U extends {}>(f: (value: T) => Option<U>): Option<U> {
    if (this.value === null) {
      return this as any as Option<U>
    }

    return f(this.value)
  }

  filter(predicate: (value: T) => boolean): Option<T> {
    if (this.value === null || predicate(this.value)) {
      return this
    }

    return None<T>()
  }

  isSome() {
    return this.value !== null
  }

  map<U extends {}>(f: (value: T) => U): Option<U> {
    if (this.value !== null) {
      return Some(f(this.value))
    }

    return this as any as Option<U>
  }

  match<U extends {}>(pattern: { Some: (value: T) => U, None: () => U }): U {
    if (this.value === null) {
      return pattern.None()
    }

    return pattern.Some(this.value)
  }

  orDefault(defaultValue: T): T {
    if (this.value === null) {
      return defaultValue
    }

    return this.value
  }

  unwrap(): T {
    if (this.value === null) {
      throw new Error('ERROR: called "unwrap" on a "None" value')
    }

    return this.value
  }
}

