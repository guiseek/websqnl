import {assign, builtIn} from '../../shared'

@builtIn('em', 'web-emphasis')
export class Emphasis extends HTMLElement {
  constructor(attrs: Partial<Emphasis> = {}) {
    super()
    assign(this, attrs)
  }
}
