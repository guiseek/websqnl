import {Anchor} from './anchor'

describe('anchor', () => {
  it('should create instance', () => {
    const element = new Anchor({href: '#'})

    expect(element).toBeInstanceOf(Anchor)
    expect(element.href).toBe('http://localhost/#')
  })
})
