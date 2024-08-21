import {Keyboard} from './keyboard'

describe('keyboard', () => {
  it('should create instance', () => {
    const element = new Keyboard()

    expect(element).toBeInstanceOf(Keyboard)
  })
})
