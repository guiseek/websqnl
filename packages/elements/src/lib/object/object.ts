import {assign, builtIn} from '../../shared'

@builtIn('object', 'web-object')
export class Object extends HTMLObjectElement {
  constructor(attrs: Partial<HTMLObjectElement> = {}) {
    super()
    assign(this, attrs)
  }
}
