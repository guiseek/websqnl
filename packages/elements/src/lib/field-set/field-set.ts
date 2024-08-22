import {assign, builtIn} from '../../shared'

@builtIn('fieldset', 'web-fieldset')
export class FieldSet extends HTMLFieldSetElement {
  constructor(attrs: Partial<FieldSet> = {}) {
    super()
    assign(this, attrs)
  }
}
