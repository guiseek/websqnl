import {assign, builtIn} from '../../shared'

@builtIn('dd', 'web-description-definition')
export class DescriptionDefinition extends HTMLElement {
  constructor(attrs: Partial<DescriptionDefinition> = {}) {
    super()
    assign(this, attrs)
  }
}
