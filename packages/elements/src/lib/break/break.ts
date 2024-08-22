import {assign, builtIn} from '../../shared'

@builtIn('br', 'web-break')
export class Break extends HTMLBRElement {
  constructor(attrs: Partial<Break> = {}) {
    super()
    assign(this, attrs)
  }
}
