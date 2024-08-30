import {assign, builtIn} from '../../shared'

@builtIn('legend', 'web-legend')
export class Legend extends HTMLLegendElement {
  constructor(attrs: Partial<Legend> = {}) {
    super()
    assign(this, attrs)
  }
}
