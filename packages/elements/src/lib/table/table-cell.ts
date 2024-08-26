import {assign, builtIn} from '../../shared'

@builtIn('td', 'web-table-cell')
export class TableCell extends HTMLTableCellElement {
  constructor(attrs: Partial<TableCell> = {}) {
    super()
    assign(this, attrs)
  }
}
