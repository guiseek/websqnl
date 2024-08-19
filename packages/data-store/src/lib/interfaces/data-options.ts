import {DataSchema} from './data-schema'

export abstract class DataOptions {
  abstract name: string
  abstract version: number
  abstract schemas: DataSchema[]
}
