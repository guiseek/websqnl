import type {Ref, Use} from './types'
import {provide} from './di'

export function singleton<T>(dep: Ref<unknown>[] = [], ref?: Ref<T>) {
  return (use: Use<T>) => {
    ref ??= use as Ref<T>
    dep ??= []
    return provide<T>({ref, use, dep, scope: 'singleton'})
  }
}

export function transient<T>(dep: Ref<unknown>[] = [], ref?: Ref<T>) {
  return (use: Use<T>) => {
    ref ??= use as Ref<T>
    dep ??= []
    return provide<T>({ref, use, dep, scope: 'transient'})
  }
}
