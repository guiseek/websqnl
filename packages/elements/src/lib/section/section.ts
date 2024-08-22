import {assign, builtIn} from '../../shared'

@builtIn('section', 'web-section')
export class Section extends HTMLElement {
  constructor(attrs: Partial<Section> = {}) {
    super()
    assign(this, attrs)
  }
}
