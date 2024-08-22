import {assign, builtIn} from '../../shared'

@builtIn('select', 'web-select')
export class Select extends HTMLSelectElement {
  constructor(attrs: Partial<Select> = {}) {
    super()
    assign(this, attrs)
  }
}
