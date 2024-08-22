import {assign, builtIn} from '../../shared'

@builtIn('main', 'web-main')
export class Main extends HTMLElement {
  constructor(attrs: Partial<Main> = {}) {
    super()
    assign(this, attrs)
  }
}
