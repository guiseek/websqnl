import {StateEvent} from './state-event'

export interface Callback<T> {
  (value: T): void
}

export interface Event<T extends keyof StateEventMap> {
  (value: StateEventMap[T]): StateEvent<T>
}

export interface Target<T extends keyof StateEventMap> {
  (callback: Callback<StateEventMap[T]>): VoidFunction
}
