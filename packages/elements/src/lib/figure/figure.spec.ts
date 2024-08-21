import {Figure} from './figure'
import {FigCaption} from './fig-caption'

describe('figure', () => {
  it('should create instance', () => {
    const element = new Figure()

    expect(element).toBeInstanceOf(Figure)
  })

  it('should create figcaption instance', () => {
    const element = new FigCaption()

    expect(element).toBeInstanceOf(FigCaption)
  })
})
