import {assign, builtIn} from '../../shared'

@builtIn('h3', 'web-h3')
export class H3 extends HTMLHeadingElement {
  constructor(attrs: Partial<H3> = {}) {
    super()
    assign(this, attrs)
  }
}
