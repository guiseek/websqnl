import type {Params, Provider, Ref, Use} from './types'
import {container, registry} from './internal'
import {is} from './utils/is'

const use = <T>(ref: Ref<T>) => {
  const provider = registry.get(ref)

  if (provider && provider.scope && provider.scope === 'transient') {
    return sync(ref)
  }

  const value = container.get(ref)

  if (!value) {
    throw `${ref.name} not registered`
  }

  return value as T
}

const useWith = <T>(ref: Ref<T>, ...params: Use<unknown>[]) => {
  const provider = registry.get(ref)

  const concrete = provider.use ?? provider.ref

  const deps = params as Params<Use<T>>

  if (is.constructor<T>(concrete)) {
    return new concrete(...deps)
  }

  if (is.factory<T>(concrete)) {
    return concrete(...deps)
  }

  return concrete as T
}

const sync = <T>(ref: Ref<T>) => {
  const provider = registry.get(ref)

  const concrete = provider.use ?? provider.ref

  if (is.asyncFactory(concrete)) {
    throw `Provider with 'transient' scope cannot use async factories`
  }

  const deps = (provider.dep ?? []).map(use) as Params<Use<T>>

  if (is.constructor<T>(concrete)) {
    return new concrete(...deps)
  }

  if (is.factory<T>(concrete)) {
    return concrete(...deps)
  }

  return concrete as T
}

const async = async <T>(ref: Ref<T>) => {
  const provider = registry.get(ref)

  const concrete = provider.use ?? provider.ref

  const deps = (provider.dep ?? []).map(use) as Params<Use<T>>

  return construct(concrete, deps)
}

const construct = async <T>(
  concrete: Use<T> | Ref<T>,
  deps: Params<Use<T>>
) => {
  if (is.constructor<T>(concrete)) {
    return new concrete(...deps)
  }

  if (is.asyncFactory<T>(concrete)) {
    return await concrete(...deps)
  }

  if (is.factory<T>(concrete)) {
    return concrete(...deps)
  }

  return concrete as T
}

const checkUnregDeps = () => {
  const unDeps: Ref<unknown>[] = []

  for (const {dep = []} of registry.values()) {
    unDeps.push(...dep.filter((ref) => !registry.has(ref)))
  }

  unDeps.forEach((ref) => provide({ref}))
}

const load = async () => {
  checkUnregDeps()

  for (const [ref, provider] of registry.entries()) {
    const scope = provider.scope ?? 'singleton'

    if (scope === 'transient') {
      continue
    }

    const deps = provider.dep ?? []

    if (container.has(ref)) {
      continue
    }

    for (const dep of deps) {
      if (container.has(dep)) {
        continue
      }

      if (!registry.has(dep)) {
        throw `${dep.name} not registered`
      }

      container.set(dep, await async(dep))
    }

    container.set(ref, await async(ref))
  }
}

const provide = <T>(provider: Provider<T>) => {
  registry.set(provider.ref, provider)
}

const provides = <T>(...providers: Provider<T | unknown>[]) => {
  providers.forEach(provide)
}

const boot = (fn: VoidFunction) => {
  return load().then(fn)
}

export {use, useWith, load, boot, provide, provides}
