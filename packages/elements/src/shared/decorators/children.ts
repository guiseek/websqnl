import {Type} from '../types'
import 'reflect-metadata'

const CHILDREN_METADATA_KEY = 'children'

const childrenMetadataKey = Symbol(CHILDREN_METADATA_KEY)

export function children<T extends HTMLElement>(target: Type<T>) {
  return Reflect.metadata(childrenMetadataKey, target)
}

export function getChildren<T extends HTMLElement>(
  decorated: T,
  property: (keyof T & string) | symbol
) {
  const walker = document.createTreeWalker(decorated, NodeFilter.SHOW_ELEMENT)

  const target = Reflect.getMetadata(childrenMetadataKey, decorated, property)

  const founded = []

  while (walker.nextNode()) {
    if (walker.currentNode instanceof target) {
      founded.push(walker.currentNode)
    }
  }

  return founded
}
