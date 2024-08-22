import {assign, builtIn} from '../../shared'

@builtIn('span', 'web-span')
export class Span extends HTMLSpanElement {
  constructor(attrs: Partial<Span> = {}) {
    super()
    assign(this, attrs)
  }
}
