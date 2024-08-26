import {NewElementGeneratorSchema, NormalizedOptions} from './schema'
import {
  Tree,
  names,
  formatFiles,
  generateFiles,
} from '@nx/devkit'
import {elementMap} from './lib/element-map'
import {join} from 'path'

function normalizeOptions(
  options: NewElementGeneratorSchema
): NormalizedOptions {
  const htmlClassName = elementMap[options.is]
  return {...options, htmlClassName, ...names(options.name)}
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
