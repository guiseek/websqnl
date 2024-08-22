import {assign, builtIn} from '../../shared'

@builtIn('h5', 'web-h5')
export class H5 extends HTMLHeadingElement {
  constructor(attrs: Partial<H5> = {}) {
    super()
    assign(this, attrs)
  }
}
