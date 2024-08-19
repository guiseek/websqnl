import {Callback, Target} from './types'
import {addCallback} from './events'

/**
 * @deprecated instead, use `createListener`
 */
export const createTarget = <T extends keyof StateEventMap>(
  type: T
): Target<T> => {
  return (callback: Callback<StateEventMap[T]>) => {
    return addCallback(type, callback)
  }
}
