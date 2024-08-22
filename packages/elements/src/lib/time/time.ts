import {assign, builtIn} from '../../shared'

@builtIn('time', 'web-time')
export class Time extends HTMLTimeElement {
  constructor(attrs: Partial<Time> = {}) {
    super()
    assign(this, attrs)
  }
}
