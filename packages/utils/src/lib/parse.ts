import {is} from './is'

export const parse = <T>(value: unknown) => {
  if (is.numberString(value)) {
    return +value
  }

  if (is.fakeBoolean(value)) {
    return value === 'true'
  }

  if (is.number(value)) {
    return value
  }

  if (is.string(value)) {
    return value
  }

  if (is.boolean(value)) {
    return value
  }

  if (is.date(value)) {
    return new Date(value.toString())
  }

  return value as T
}
