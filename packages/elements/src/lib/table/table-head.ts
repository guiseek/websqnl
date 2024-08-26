import {assign, builtIn} from '../../shared'

@builtIn('thead', 'web-table-head')
export class TableHead extends HTMLTableSectionElement {
  constructor(attrs: Partial<TableHead> = {}) {
    super()
    assign(this, attrs)
  }
}
