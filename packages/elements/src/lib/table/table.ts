import {assign, builtIn} from '../../shared'

@builtIn('table', 'web-table')
export class Table extends HTMLTableElement {
  constructor(attrs: Partial<Table> = {}) {
    super()
    assign(this, attrs)
  }
}
