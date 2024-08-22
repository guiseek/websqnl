import {Button} from './button'

describe('button', () => {
  it('should create instance', () => {
    const element = new Button()

    expect(element).toBeInstanceOf(Button)
  })
})
