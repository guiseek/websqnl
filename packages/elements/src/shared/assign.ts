export function assign<T extends object>(instance: T, attrs?: Partial<T>) {
  return Object.assign(instance, attrs ?? {})
}
