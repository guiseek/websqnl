import {assign, builtIn} from '../../shared'

@builtIn('cite', 'web-cite')
export class Cite extends HTMLElement {
  constructor(attrs: Partial<Cite> = {}) {
    super()
    assign(this, attrs)
  }
}
