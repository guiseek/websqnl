import type {Alias} from './alias'
import {Token} from './token'

export type Abstract<T, P extends unknown[] = never[]> = abstract new (
  ...args: P
) => T

export type Constructor<T, P extends unknown[] = never[]> = new (
  ...args: P
) => T

export interface Factory<T, P extends unknown[] = never[]> {
  (...args: P): T
}

export interface AsyncFactory<T, P extends unknown[] = never[]> {
  (...args: P): Promise<T>
}

export type Params<T> = T extends Constructor<unknown>
  ? ConstructorParameters<T>
  : T extends Factory<unknown>
  ? Parameters<T>
  : never[]

export type Ref<T, P extends unknown[] = never[]> =
  | Abstract<T, P>
  | Constructor<T, P>
  | Alias<T>
  | Token<T>

export type Use<T, P extends unknown[] = never[]> =
  | Constructor<T, P>
  | Factory<T, P>
  | AsyncFactory<T, P>
  | T

export type Scope = `singleton` | `transient`

export interface Provider<T = any> {
  ref: Ref<T>
  use?: Use<T>
  dep?: Ref<unknown>[]
  scope?: Scope
}
