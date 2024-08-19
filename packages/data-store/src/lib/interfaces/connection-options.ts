import {DataSchema} from './data-schema'

export interface ConnectionOptions {
  name: string
  version: number
  schemas: DataSchema[]
}
