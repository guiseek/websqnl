export interface NewElementGeneratorSchema {
  name: string
  directory?: string
  is: keyof HTMLElementTagNameMap
}

export interface NormalizedOptions extends NewElementGeneratorSchema {
  htmlClassName: string
  className: string
  fileName: string
  dirName: string
  exports: string[]
}