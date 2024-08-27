import {assign, builtIn} from '../../shared'

@builtIn('summary', 'web-summary')
export class Summary extends HTMLElement {
  constructor(attrs: Partial<Summary> = {}) {
    super()
    assign(this, attrs)
  }
}
