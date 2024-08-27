import {assign, builtIn} from '../../shared'

@builtIn('details', 'web-details')
export class Details extends HTMLDetailsElement {
  constructor(attrs: Partial<Details> = {}) {
    super()
    assign(this, attrs)
  }
}
