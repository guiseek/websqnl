import {assign, builtIn} from '../../shared'

@builtIn('small', 'web-small')
export class Small extends HTMLElement {
  constructor(attrs: Partial<Small> = {}) {
    super()
    assign(this, attrs)
  }
}
