import {assign, builtIn} from '../../shared'

@builtIn('pre', 'web-preformatted')
export class Preformatted extends HTMLPreElement {
  constructor(attrs: Partial<Preformatted> = {}) {
    super()
    assign(this, attrs)
  }
}
