import {assign, builtIn} from '../../shared'

@builtIn('picture', 'web-picture')
export class Picture extends HTMLPictureElement {
  constructor(attrs: Partial<Picture> = {}) {
    super()
    assign(this, attrs)
  }
}
