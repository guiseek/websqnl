import {Callback} from './types'

const events = new Map<string, Set<Callback<any>>>()

export const addCallback = <T extends keyof StateEventMap>(
  type: T,
  callback: Callback<StateEventMap[T]>
) => {
  const callbacks = getCallbacks<T>(type)
  events.set(type, callbacks.add(callback))
  return () => {
    callbacks.delete(callback)
    events.set(type, callbacks)
  }
}

export const getCallbacks = <T extends keyof StateEventMap>(type: T) => {
  return events.get(type) ?? new Set<Callback<StateEventMap[T]>>()
}
