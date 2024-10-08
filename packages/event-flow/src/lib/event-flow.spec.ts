import {createListener} from './create-listener'
import {createEvent} from './create-event'
import {Event, Target} from './types'
import {dispatch} from './dispatch'

describe('eventFlow', () => {
  let ping: Event<'ping'>
  let onPing: Target<'ping'>

  beforeEach(() => {
    ping = createEvent('ping')
    onPing = createListener('ping')
  })

  it('should work', () => {
    const fn = jest.fn()

    onPing(fn)

    const date = new Date()

    dispatch(ping(date))

    expect(fn).toHaveBeenCalledWith(date)
  })
})
