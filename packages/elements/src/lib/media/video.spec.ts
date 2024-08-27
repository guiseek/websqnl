import {Track} from './track'
import {Video} from './video'

describe('video', () => {
  it('should create instance', () => {
    const element = new Video()

    expect(element).toBeInstanceOf(Video)
  })

  it('should create instance', () => {
    const element = new Track()

    expect(element).toBeInstanceOf(Track)
  })
})
