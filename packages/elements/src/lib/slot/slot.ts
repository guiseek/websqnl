import {assign, builtIn} from '../../shared'

@builtIn('slot', 'web-slot')
export class Slot extends HTMLSlotElement {
  constructor(attrs: Partial<Slot> = {}) {
    super()
    assign(this, attrs)
  }
}
