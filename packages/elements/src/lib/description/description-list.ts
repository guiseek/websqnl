import {assign, builtIn} from '../../shared'

@builtIn('dl', 'web-description-list')
export class DescriptionList extends HTMLDListElement {
  constructor(attrs: Partial<DescriptionList> = {}) {
    super()
    assign(this, attrs)
  }
}
