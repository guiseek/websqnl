export class Alias<T> {
  name: string
  constructor(name: string) {
    this.name = name
    return this as Alias<T>
  }
}
