import {assign, builtIn} from '../../shared'

@builtIn('mark', 'web-mark')
export class Mark extends HTMLElement {
  constructor(attrs: Partial<Mark> = {}) {
    super()
    assign(this, attrs)
  }
}
