import {assign, builtIn} from '../../shared'

@builtIn('ul', 'web-unordered-list')
export class UnorderedList extends HTMLUListElement {
  constructor(attrs: Partial<UnorderedList> = {}) {
    super()
    assign(this, attrs)
  }
}
