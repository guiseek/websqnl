import {Select} from './select'
import {OptionGroup} from './option-group'

describe('select', () => {
  it('should create instance', () => {
    const element = new Select()

    expect(element).toBeInstanceOf(Select)
  })

  it('should create option-group instance', () => {
    const element = new OptionGroup()

    expect(element).toBeInstanceOf(OptionGroup)
  })
})
