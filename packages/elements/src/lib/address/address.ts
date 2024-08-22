import {assign, builtIn} from '../../shared'

@builtIn('address', 'web-address')
export class Address extends HTMLElement {
  constructor(attrs: Partial<Address> = {}) {
    super()
    assign(this, attrs)
  }
}
