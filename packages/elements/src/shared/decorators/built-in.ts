interface CustomElement<T> extends CustomElementConstructor {
  prototype: T
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...args: any[]): T
}

export const builtIn = <K extends keyof HTMLElementTagNameMap>(
  is: K,
  tag: `${string}-${string}`
) => {
  return <T extends CustomElement<HTMLElementTagNameMap[K]>>(target: T) => {
    customElements.define(tag, target, {extends: is})
  }
}
