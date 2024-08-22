import {assign, builtIn} from '../../shared'

@builtIn('hr', 'web-horizontal-rule')
export class HorizontalRule extends HTMLHRElement {
  constructor(attrs: Partial<HorizontalRule> = {}) {
    super()
    assign(this, attrs)
  }
}
