import {assign, builtIn} from '../../shared'

@builtIn('h6', 'web-h6')
export class H6 extends HTMLHeadingElement {
  constructor(attrs: Partial<H6> = {}) {
    super()
    assign(this, attrs)
  }
}
