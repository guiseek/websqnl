import {assign, builtIn} from '../../shared'

@builtIn('template', 'web-template')
export class Template extends HTMLTemplateElement {
  constructor(attrs: Partial<Template> = {}) {
    super()
    assign(this, attrs)
  }
}
