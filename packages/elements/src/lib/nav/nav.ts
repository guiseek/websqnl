import {assign, builtIn} from '../../shared'

@builtIn('nav', 'web-nav')
export class Nav extends HTMLElement {
  constructor(attrs: Partial<Nav> = {}) {
    super()
    assign(this, attrs)
  }
}
