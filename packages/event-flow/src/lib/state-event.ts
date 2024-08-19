export abstract class StateEvent<T extends keyof StateEventMap> {
  constructor(public type: T, public value: StateEventMap[T]) {}

  abstract dispatch(): void
}
