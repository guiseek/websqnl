import {NewElementGeneratorSchema, NormalizedOptions} from './schema'
import {Tree, names, formatFiles, generateFiles} from '@nx/devkit'
import {elementMap} from './lib/element-map'
import {readdirSync, existsSync} from 'fs'
import {join} from 'path'

function normalizeOptions(
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

  return {...options, htmlClassName, dirName, fileName, className, exports}
}

function removeFromList<T>(list: T[], predicate: (value: T) => boolean) {
  return list.filter((item) => !predicate(item))
}

export async function newElementGenerator(
  tree: Tree,
  options: NewElementGeneratorSchema
) {
  const isValidElement = Object.keys(elementMap).includes(options.is)

  if (!isValidElement) throw new Error(`Tag ${options.is} does not a valid tag`)

  const normalizedOptions = normalizeOptions(options)

  generateFiles(
    tree,
    join(__dirname, 'files'),
    join('packages', 'elements'),
    normalizedOptions
  )
  await formatFiles(tree)
}

export default newElementGenerator
