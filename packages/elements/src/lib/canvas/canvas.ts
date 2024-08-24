import {assign, builtIn} from '../../shared'

@builtIn('canvas', 'web-canvas')
export class Canvas extends HTMLCanvasElement {
  constructor(attrs: Partial<Canvas> = {}) {
    super()
    assign(this, attrs)
  }
}
