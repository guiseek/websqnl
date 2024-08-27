import {Textarea} from './textarea'

describe('textarea', () => {
  it('should create instance', () => {
    const element = new Textarea()

    expect(element).toBeInstanceOf(Textarea)
  })
})
