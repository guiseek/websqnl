import {assign, builtIn} from '../../shared'

@builtIn('embed', 'web-embed')
export class Embed extends HTMLEmbedElement {
  constructor(attrs: Partial<Embed> = {}) {
    super()
    assign(this, attrs)
  }
}
