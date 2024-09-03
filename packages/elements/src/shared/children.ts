export const children = <T>(parent: Element | ShadowRoot) => {
  return Array.from(parent.children) as T[]
}
