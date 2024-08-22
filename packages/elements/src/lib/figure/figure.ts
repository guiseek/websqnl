import {assign, builtIn} from '../../shared'

@builtIn('figure', 'web-figure')
export class Figure extends HTMLElement {
  constructor(attrs: Partial<Figure> = {}) {
    super()
    assign(this, attrs)
  }
}
