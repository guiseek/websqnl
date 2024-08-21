import {DescriptionDefinition} from './description-definition'
import {DescriptionList} from './description-list'
import {DescriptionTerm} from './description-term'

describe('description', () => {
  it('should create instance', () => {
    const element = new DescriptionList()

    expect(element).toBeInstanceOf(DescriptionList)
  })

  it('should create term instance', () => {
    const element = new DescriptionTerm()

    expect(element).toBeInstanceOf(DescriptionTerm)
  })

  it('should create definition instance', () => {
    const element = new DescriptionDefinition()

    expect(element).toBeInstanceOf(DescriptionDefinition)
  })
})
