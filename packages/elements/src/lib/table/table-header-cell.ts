import {assign, builtIn} from '../../shared'

@builtIn('th', 'web-table-header-cell')
export class TableHeaderCell extends HTMLTableCellElement {
  constructor(attrs: Partial<TableHeaderCell> = {}) {
    super()
    assign(this, attrs)
  }
}
