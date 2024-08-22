import {assign, builtIn} from '../../shared'

@builtIn('h4', 'web-h4')
export class H4 extends HTMLHeadingElement {
  constructor(attrs: Partial<H4> = {}) {
    super()
    assign(this, attrs)
  }
}
