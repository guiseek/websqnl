import {Callback, Listener} from './types'
import {addCallback} from './events'

export const createListener = <T extends keyof StateEventMap>(
  type: T
): Listener<T> => {
  return (callback: Callback<StateEventMap[T]>) => {
    return addCallback(type, callback)
  }
}
