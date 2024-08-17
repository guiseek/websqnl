import {StateEvent} from './state-event'
import {Event} from './types'

export const createEvent = <T extends keyof StateEventMap>(
  type: T
): Event<T> => {
  return (value: StateEventMap[T]): StateEvent<T> => {
    return new (class extends StateEvent<T> {
      constructor() {
        super(type, value)
      }
    })()
  }
}
