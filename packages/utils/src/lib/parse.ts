import {is} from './is'

export const parse = <T>(value: unknown): T | null => {
  if (value == null) {
    return null
  }

  if (is.boolean(value)) {
    return (value === 'true' || value === true) as unknown as T
  }

  if (is.number(value)) {
    return value as T
  }

  if (typeof value === 'string' && is.number(+value)) {
    return +value as unknown as T
  }

  if (is.date(value)) {
    return new Date(value.toString()) as T
  }

  if (is.string(value)) {
    return value as T
  }

  return value as T
}
