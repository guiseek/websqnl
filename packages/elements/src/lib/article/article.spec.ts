import {Article} from './article'

describe('article', () => {
  it('should create instance', () => {
    const element = new Article()

    expect(element).toBeInstanceOf(Article)
  })
})
