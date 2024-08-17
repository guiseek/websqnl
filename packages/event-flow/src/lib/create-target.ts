import {addCallback} from './events'
import {Callback, Target} from './types'

export const createTarget = <T extends keyof StateEventMap>(
  type: T
): Target<T> => {
  return (callback: Callback<StateEventMap[T]>) => {
    return addCallback(type, callback)
  }
}
