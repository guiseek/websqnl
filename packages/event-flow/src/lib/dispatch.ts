import {StateEvent} from './state-event'
import {getCallbacks} from './events'

export const dispatch = <T extends keyof StateEventMap>(
  stateEvent: StateEvent<T>
) => {
  for (const callback of getCallbacks(stateEvent.type)) {
    callback(stateEvent.value)
  }
}
