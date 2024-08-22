import {assign, builtIn} from '../../shared'

@builtIn('input', 'web-input')
export class Input extends HTMLInputElement {
  constructor(attrs: Partial<Input> = {}) {
    super()
    assign(this, attrs)
  }
}
