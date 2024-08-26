export interface NewElementGeneratorSchema {
  name: string
  is: keyof HTMLElementTagNameMap
}

export interface NormalizedOptions extends NewElementGeneratorSchema {
  htmlClassName: string
  className: string
  fileName: string
}