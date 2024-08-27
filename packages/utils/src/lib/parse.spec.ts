import {parse} from './parse'

describe('parse', () => {
  it('should be string', () => {
    expect(parse('string')).toBe('string')
  })

  it('should be true', () => {
    expect(parse('true')).toBe(true)
  })

  it('should be false', () => {
    expect(parse('false')).toBe(false)
  })

  it('should be date', () => {
    const date = Date.UTC(2024, 11, 10, 0, 0, 0, 0)
    expect(parse(date)).toBe(date)
  })
})
