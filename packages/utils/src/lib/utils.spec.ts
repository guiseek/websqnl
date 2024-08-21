import {entries} from './entries'
import {values} from './values'

describe('is', () => {
  it('should be truthy', () => {
    expect(entries({a: 'a', b: 'b'})).toStrictEqual([
      ['a', 'a'],
      ['b', 'b'],
    ])
  })

  it('should be truthy', () => {
    expect(values({a: 'a', b: 'b'})).toStrictEqual(['a', 'b'])
  })
})
