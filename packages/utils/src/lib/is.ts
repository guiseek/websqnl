import {Fn, Type} from './types'

export const is = {
  string(value: unknown): value is string {
    return typeof value === 'string'
  },
  number(value: unknown): value is number {
    return typeof value === 'number' && !isNaN(value)
  },
  date(value: unknown): value is Date {
    return (
      (value instanceof Date && value.toString() !== 'Invalid Date') ||
      !isNaN(new Date(String(value)).getTime())
    )
  },
  boolean(value: unknown): value is boolean | 'true' | 'false' {
    return (
      value === true || value === false || value === 'true' || value === 'false'
    )
  },
  object<T>(value: unknown): value is T {
    return typeof value === 'object' && value !== null
  },
  array<T>(value: unknown): value is T[] {
    return Array.isArray(value)
  },
  function<T>(value: unknown): value is T {
    return typeof value === 'function'
  },
  class<T>(value: unknown): value is Type<T> {
    return (
      typeof value === 'function' &&
      typeof (value as Fn<T>).prototype === 'object' &&
      'constructor' in (value as Fn<T>).prototype
    )
  },
}
