import { DataIndex } from "./data-index"

export interface DataSchema {
  name: string
  autoIncrement?: boolean
  keyPath?: string | string[] | null
  indexes: DataIndex[]
}
