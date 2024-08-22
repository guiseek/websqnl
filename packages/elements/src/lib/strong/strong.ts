import {assign, builtIn} from '../../shared'

@builtIn('strong', 'web-strong')
export class Strong extends HTMLElement {
  constructor(attrs: Partial<Strong> = {}) {
    super()
    assign(this, attrs)
  }
}
