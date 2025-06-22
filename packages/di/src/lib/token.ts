/**
 * @deprecated instead, use the [Alias](./alias.ts) class
 */
export class Token<T = any> {
  constructor(public name: string, public value?: T) {}
}

export function createToken<T>(name: string) {
  return new Token<T>(name)
}
