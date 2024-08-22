import {assign, builtIn} from '../../shared'

@builtIn('blockquote', 'web-blockquote')
export class Quote extends HTMLQuoteElement {
  constructor(attrs: Partial<Quote> = {}) {
    super()
    assign(this, attrs)
  }
}
