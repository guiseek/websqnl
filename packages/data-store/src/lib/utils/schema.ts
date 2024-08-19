import {DataIndex, DataSchema} from '../interfaces'

interface SchemaOptions {
  autoIncrement?: boolean
  keyPath?: string | string[] | null
}

export const schema = (
  name: string,
  indexes: DataIndex[],
  options: SchemaOptions = {}
): DataSchema => {
  let {keyPath} = options
  if (!keyPath) keyPath = name
  return {name, ...options, indexes}
}

export const index = (
  name: string,
  unique = false,
  keyPath?: string
): DataIndex => {
  if (!keyPath) keyPath = name
  return {name, keyPath, unique}
}
