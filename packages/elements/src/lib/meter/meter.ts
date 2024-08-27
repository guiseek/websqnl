import {assign, builtIn} from '../../shared'

@builtIn('meter', 'web-meter')
export class Meter extends HTMLMeterElement {
  constructor(attrs: Partial<Meter> = {}) {
    super()
    assign(this, attrs)
  }
}
