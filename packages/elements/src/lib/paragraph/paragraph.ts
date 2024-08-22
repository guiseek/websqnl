import {assign, builtIn} from '../../shared'

@builtIn('p', 'web-paragraph')
export class Paragraph extends HTMLParagraphElement {
  constructor(attrs: Partial<Paragraph> = {}) {
    super()
    assign(this, attrs)
  }
}
