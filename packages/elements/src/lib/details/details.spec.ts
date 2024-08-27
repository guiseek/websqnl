import {Details} from './details'
import {Summary} from './summary'

describe('details', () => {
  it('should create instance', () => {
    const element = new Details()

    expect(element).toBeInstanceOf(Details)
  })

  it('should create instance', () => {
    const element = new Summary()

    expect(element).toBeInstanceOf(Summary)
  })
})
