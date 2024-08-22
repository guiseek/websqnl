import {assign, builtIn} from '../../shared'

@builtIn('dt', 'web-description-term')
export class DescriptionTerm extends HTMLElement {
  constructor(attrs: Partial<DescriptionTerm> = {}) {
    super()
    assign(this, attrs)
  }
}
