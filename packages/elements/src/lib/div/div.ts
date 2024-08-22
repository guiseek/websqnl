import {assign, builtIn} from '../../shared'

@builtIn('div', 'web-div')
export class Div extends HTMLDivElement {
  constructor(attrs: Partial<Div> = {}) {
    super()
    assign(this, attrs)
  }
}
