import {assign, builtIn} from '../../shared'

@builtIn('video', 'web-video')
export class Video extends HTMLVideoElement {
  constructor(attrs: Partial<Video> = {}) {
    super()
    assign(this, attrs)
  }
}
