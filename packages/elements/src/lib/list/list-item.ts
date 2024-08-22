import {assign, builtIn} from '../../shared'

@builtIn('li', 'web-list-item')
export class ListItem extends HTMLLIElement {
  constructor(attrs: Partial<ListItem> = {}) {
    super()
    assign(this, attrs)
  }
}
