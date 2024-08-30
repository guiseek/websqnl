import {TextArea} from './textarea'

describe('textarea', () => {
  it('should create instance', () => {
    const element = new TextArea()

    expect(element).toBeInstanceOf(TextArea)
  })
})
