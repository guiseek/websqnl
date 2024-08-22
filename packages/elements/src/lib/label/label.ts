import {assign, builtIn} from '../../shared'

@builtIn('label', 'web-label')
export class Label extends HTMLLabelElement {
  constructor(attrs: Partial<Label> = {}) {
    super()
    assign(this, attrs)
  }
}
