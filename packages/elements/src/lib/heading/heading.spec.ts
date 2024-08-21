import {H1} from './h1'
import {H2} from './h2'
import {H3} from './h3'
import {H4} from './h4'
import {H5} from './h5'
import {H6} from './h6'

describe('heading', () => {
  it('should create instance', () => {
    const element = new H1()

    expect(element).toBeInstanceOf(H1)
  })

  it('should create h2 instance', () => {
    const element = new H2()

    expect(element).toBeInstanceOf(H2)
  })

  it('should create h3 instance', () => {
    const element = new H3()

    expect(element).toBeInstanceOf(H3)
  })

  it('should create h4 instance', () => {
    const element = new H4()

    expect(element).toBeInstanceOf(H4)
  })

  it('should create h5 instance', () => {
    const element = new H5()

    expect(element).toBeInstanceOf(H5)
  })

  it('should create h6 instance', () => {
    const element = new H6()

    expect(element).toBeInstanceOf(H6)
  })
})
