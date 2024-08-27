import {assign, builtIn} from '../../shared'

@builtIn('track', 'web-track')
export class Track extends HTMLTrackElement {
  constructor(attrs: Partial<Track> = {}) {
    super()
    assign(this, attrs)
  }
}
