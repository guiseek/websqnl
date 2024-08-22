import {assign, builtIn} from '../../shared'

@builtIn('footer', 'web-footer')
export class Footer extends HTMLElement {
  constructor(attrs: Partial<Footer> = {}) {
    super()
    assign(this, attrs)
  }
}
