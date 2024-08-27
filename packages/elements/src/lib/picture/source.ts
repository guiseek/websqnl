import {assign, builtIn} from '../../shared'

@builtIn('source', 'web-source')
export class Source extends HTMLSourceElement {
  constructor(attrs: Partial<Source> = {}) {
    super()
    assign(this, attrs)
  }
}
