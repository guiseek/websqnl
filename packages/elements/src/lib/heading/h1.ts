import {assign, builtIn} from '../../shared'

@builtIn('h1', 'web-h1')
export class H1 extends HTMLHeadingElement {
  constructor(attrs: Partial<H1> = {}) {
    super()
    assign(this, attrs)
  }
}
