import {Tree, formatFiles, generateFiles} from '@nx/devkit'
import {normalizeOptions} from './lib/normalize-options'
import {NewElementGeneratorSchema} from './schema'
import {elementMap} from './lib/element-map'
import {join} from 'path'

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
