import {Paragraph} from './paragraph'

describe('paragraph', () => {
  it('should create instance', () => {
    const element = new Paragraph()

    expect(element).toBeInstanceOf(Paragraph)
  })
})
