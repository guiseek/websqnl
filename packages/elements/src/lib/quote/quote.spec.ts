import {Quote} from './quote'

describe('quote', () => {
  it('should create instance', () => {
    const element = new Quote()

    expect(element).toBeInstanceOf(Quote)
  })
})
