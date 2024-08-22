import {assign, builtIn} from '../../shared'

@builtIn('aside', 'web-aside')
export class Aside extends HTMLElement {
  constructor(attrs: Partial<Aside> = {}) {
    super()
    assign(this, attrs)
  }
}
