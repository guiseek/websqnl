import {assign, builtIn} from '../../shared'

@builtIn('form', 'web-form')
export class Form extends HTMLFormElement {
  constructor(attrs: Partial<Form> = {}) {
    super()
    assign(this, attrs)
  }
}
