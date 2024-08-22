import {assign, builtIn} from '../../shared'

@builtIn('progress', 'web-progress')
export class Progress extends HTMLProgressElement {
  constructor(attrs: Partial<Progress> = {}) {
    super()
    assign(this, attrs)
  }
}
