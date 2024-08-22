import {assign, builtIn} from '../../shared'

@builtIn('menu', 'web-menu')
export class Menu extends HTMLMenuElement {
  constructor(attrs: Partial<Menu> = {}) {
    super()
    assign(this, attrs)
  }
}
