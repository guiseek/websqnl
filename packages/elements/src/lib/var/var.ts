import {assign, builtIn} from '../../shared'

@builtIn('var', 'web-var')
export class Var extends HTMLElement {
  constructor(attrs: Partial<Var> = {}) {
    super()
    assign(this, attrs)
  }
}
