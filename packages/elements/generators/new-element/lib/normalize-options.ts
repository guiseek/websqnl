import {NewElementGeneratorSchema, NormalizedOptions} from '../schema'
import {existsSync, readdirSync} from 'fs'
import {elementMap} from './element-map'
import {names} from '@nx/devkit'
import {join} from 'path'

export function normalizeOptions(
  options: NewElementGeneratorSchema
): NormalizedOptions {
  const htmlClassName = elementMap[options.is]

  const {fileName, className} = names(options.name)

  let dirName = fileName

  if (options.directory) {
    const {fileName} = names(options.directory)
    dirName = fileName
  }

  let exports: string[] = []

  const path = join('packages', 'elements', 'src', 'lib', dirName)

  if (existsSync(path)) {
    const files = readdirSync(path)
    const predicate = (file: string) => {
      return file.startsWith('index.ts') || file.endsWith('spec.ts')
    }
    exports = removeFromList(files, predicate).map((file) =>
      file.replace(/.ts/, '')
    )
  }

  exports.push(fileName)

  return {...options, exports, htmlClassName, dirName, fileName, className}
}

function removeFromList<T>(list: T[], predicate: (value: T) => boolean) {
  return list.filter((item) => !predicate(item))
}
