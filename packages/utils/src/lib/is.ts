import {getType} from './get-type'
import {FakeBoolean, Fn, NumberString, Type} from './types'

export const is = {
  number(value: unknown): value is number {
    return getType(value) === 'number'
  },
  numberString(value: unknown): value is NumberString {
    return this.string(value) && !isNaN(+String(value))
  },
  string(value: unknown): value is string {
    return getType(value) === 'string'
  },
  boolean(value: unknown): value is boolean {
    return getType(value) === 'boolean'
  },
  fakeBoolean(value: unknown): value is FakeBoolean {
    return this.string(value) && (value === 'true' || value === 'false')
  },
  date(value: unknown): value is Date {
    return getType(value) === 'date'
  },
  object<T>(value: unknown): value is T {
    return getType(value) === 'object'
  },
  array<T>(value: unknown): value is T[] {
    return getType(value) === 'array'
  },
  function<T>(value: unknown): value is T {
    return getType(value) === 'function'
  },
  class<T>(value: unknown): value is Type<T> {
    return (
      typeof value === 'function' &&
      typeof (value as Fn<T>).prototype === 'object' &&
      'constructor' in (value as Fn<T>).prototype
    )
  },
}
