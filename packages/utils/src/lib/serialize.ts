import {formValue} from './form-value'
import {entries} from './entries'
import {parse} from './parse'

export const serialize = <T extends object>(form: T | object) => {
  const data = form instanceof HTMLFormElement ? formValue<T>(form) : form
  return entries(data).reduce((prev, [key, val]) => {
    return {...prev, [key]: parse(val)}
  }, data) as T
}
