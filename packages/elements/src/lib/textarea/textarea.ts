import {assign, builtIn} from '../../shared'

@builtIn('textarea', 'web-textarea')
export class Textarea extends HTMLTextAreaElement {
  constructor(attrs: Partial<Textarea> = {}) {
    super()
    assign(this, attrs)
  }
}
