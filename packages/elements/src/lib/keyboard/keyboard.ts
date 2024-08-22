import {assign, builtIn} from '../../shared'

@builtIn('kbd', 'web-keyboard')
export class Keyboard extends HTMLElement {
  constructor(attrs: Partial<Keyboard> = {}) {
    super()
    assign(this, attrs)
  }
}
