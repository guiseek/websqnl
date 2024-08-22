import {assign, builtIn} from '../../shared'

@builtIn('h2', 'web-h2')
export class H2 extends HTMLHeadingElement {
  constructor(attrs: Partial<H2> = {}) {
    super()
    assign(this, attrs)
  }
}
