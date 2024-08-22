import {assign, builtIn} from '../../shared'

@builtIn('header', 'web-header')
export class Header extends HTMLElement {
  constructor(attrs: Partial<Header> = {}) {
    super()
    assign(this, attrs)
  }
}
