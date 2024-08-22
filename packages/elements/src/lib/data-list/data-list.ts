import {assign, builtIn} from '../../shared'

@builtIn('datalist', 'web-data-list')
export class DataList extends HTMLDataListElement {
  constructor(attrs: Partial<DataList> = {}) {
    super()
    assign(this, attrs)
  }
}
