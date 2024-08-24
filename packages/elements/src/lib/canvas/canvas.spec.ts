import {Canvas} from './canvas'

describe('canvas', () => {
  it('should create instance', () => {
    const element = new Canvas()

    expect(element).toBeInstanceOf(Canvas)
  })
})
