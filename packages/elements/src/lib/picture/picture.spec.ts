import {Picture} from './picture'
import {Source} from './source'

describe('picture', () => {
  it('should create instance', () => {
    const element = new Picture()

    expect(element).toBeInstanceOf(Picture)
  })

  it('should create instance', () => {
    const element = new Source()

    expect(element).toBeInstanceOf(Source)
  })
})
