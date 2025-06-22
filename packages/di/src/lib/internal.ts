import type {Provider, Ref} from './types'

const _container = new Map()

const container = {
  has<T>(ref: Ref<T>) {
    return _container.has(ref)
  },
  get<T>(ref: Ref<T>): T {
    return _container.get(ref)
  },
  set<T>(ref: Ref<T>, dependency: T) {
    _container.set(ref, dependency)
  },
  entries() {
    return _container.entries()
  },
}

const _registry = new Map<Ref<unknown>, Provider>()

const registry = {
  has<T>(ref: Ref<T>) {
    return _registry.has(ref)
  },
  get<T>(ref: Ref<T>): Provider<T> {
    const provider = _registry.get(ref)

    if (!provider) {
      throw `Provider ${ref.name} not found`
    }

    return provider
  },
  set<T>(ref: Ref<T>, provider: Provider<T>) {
    _registry.set(ref, provider)
  },
  entries() {
    return _registry.entries()
  },
  values() {
    return _registry.values()
  },
}

export {container, registry}
