import type {AsyncFactory, Constructor, Factory} from '../types'

const is = {
  object<T, K extends keyof T>(value: unknown): value is Record<K, T[K]> {
    return typeof value === 'object'
  },
  factory<T>(value: unknown): value is Factory<T> {
    return typeof value === 'function'
  },
  asyncFactory<T>(value: unknown): value is AsyncFactory<T> {
    return this.factory(value) && value.constructor.name === 'AsyncFunction'
  },
  constructor<T>(value: unknown): value is Constructor<T> {
    return this.factory(value) && typeof value.prototype === 'object'
  },
}

export {is}
