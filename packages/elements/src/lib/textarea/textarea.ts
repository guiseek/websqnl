import {assign, builtIn} from '../../shared'

@builtIn('textarea', 'web-text-area')
export class TextArea extends HTMLTextAreaElement {
  constructor(attrs: Partial<TextArea> = {}) {
    super()
    assign(this, attrs)
  }
}
