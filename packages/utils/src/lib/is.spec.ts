import {is} from './is'

describe('is', () => {
  it('should be truthy', () => {
    expect(is.string('string')).toBeTruthy()
  })
  
  it('should be truthy', () => {
    expect(is.number(10)).toBeTruthy()
  })
  
  it('should be truthy', () => {
    expect(is.date('2024-10-10')).toBeTruthy()
  })
  
  it('should be falsy', () => {
    expect(is.date(new Date('2024-80'))).toBeFalsy()
  })


  it('should be falsy', () => {
    expect(is.date('2024-80')).toBeFalsy()
  })
  
  it('should be truthy', () => {
    expect(is.date('2024-10-10')).toBeTruthy()
  })
  
  it('should be falsy', () => {
    expect(is.fakeBoolean('truee')).toBeFalsy()
  })
  
  it('should be falsy', () => {
    expect(is.fakeBoolean('flse')).toBeFalsy()
  })
  
  it('should be truthy', () => {
    expect(is.fakeBoolean('false')).toBeTruthy()
  })
  
  it('should be truthy', () => {
    expect(is.object({})).toBeTruthy()
  })
  
  it('should be falsy', () => {
    expect(is.object('')).toBeFalsy()
  })

  it('should be truthy', () => {
    expect(is.array([])).toBeTruthy()
  })
  
  it('should be falsy', () => {
    expect(is.array({})).toBeFalsy()
  })

  it('should be truthy', () => {
    expect(is.function((v: unknown) => v)).toBeTruthy()
  })
  
  it('should be truthy', () => {
    expect(is.class(class {})).toBeTruthy()
  })
  
  it('should be falsy', () => {
    expect(is.class('')).toBeFalsy()
  })
})
