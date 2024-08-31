import {assign, builtIn} from '../../shared'

@builtIn('output', 'web-output')
export class Output extends HTMLOutputElement {
  constructor(attrs: Partial<Output> = {}) {
    super()
    assign(this, attrs)
  }
}
