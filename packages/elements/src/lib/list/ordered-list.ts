import {assign, builtIn} from '../../shared'

@builtIn('ol', 'web-ordered-list')
export class OrderedList extends HTMLOListElement {
  constructor(attrs: Partial<OrderedList> = {}) {
    super()
    assign(this, attrs)
  }
}
