import {assign, builtIn} from '../../shared'

@builtIn('tr', 'web-table-row')
export class TableRow extends HTMLTableRowElement {
  constructor(attrs: Partial<TableRow> = {}) {
    super()
    assign(this, attrs)
  }
}
