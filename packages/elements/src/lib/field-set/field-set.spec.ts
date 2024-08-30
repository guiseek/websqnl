import {FieldSet} from './field-set'
import {Legend} from './legend'

describe('field-set', () => {
  it('should create instance', () => {
    const element = new FieldSet()

    expect(element).toBeInstanceOf(FieldSet)
  })

  it('should create legend instance', () => {
    const element = new Legend()

    expect(element).toBeInstanceOf(Legend)
  })
})
