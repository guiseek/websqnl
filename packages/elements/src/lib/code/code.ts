import {assign, builtIn} from '../../shared'

@builtIn('code', 'web-code')
export class Code extends HTMLElement {
  constructor(attrs: Partial<Code> = {}) {
    super()
    assign(this, attrs)
  }
}
