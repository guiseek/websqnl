import {Form} from './form'

describe('form', () => {
  it('should create instance', () => {
    const element = new Form()

    expect(element).toBeInstanceOf(Form)
  })
})
