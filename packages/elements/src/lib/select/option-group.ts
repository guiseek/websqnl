import {assign, builtIn} from '../../shared'

@builtIn('optgroup', 'web-option-group')
export class OptionGroup extends HTMLOptGroupElement {
  constructor(attrs: Partial<OptionGroup> = {}) {
    super()
    assign(this, attrs)
  }

  add(...options: HTMLOptionElement[]) {
    this.append(...options)
  }
}
