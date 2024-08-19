import {StateEvent} from './state-event'
import {getCallbacks} from './events'
import {Event} from './types'

export const create = <T extends keyof StateEventMap>(type: T): Event<T> => {
  return (value: StateEventMap[T]): StateEvent<T> => {
    return new (class extends StateEvent<T> {
      constructor() {
        super(type, value)
      }

      dispatch() {
        for (const callback of getCallbacks(this.type)) {
          callback(this.value)
        }
      }
    })()
  }
}
