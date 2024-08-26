import {assign, builtIn} from '../../shared'

@builtIn('tbody', 'web-table-body')
export class TableBody extends HTMLTableSectionElement {
  constructor(attrs: Partial<TableBody> = {}) {
    super()
    assign(this, attrs)
  }
}
