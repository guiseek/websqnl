export interface Type<T> extends ReturnType<FunctionConstructor> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  new (...params: any[]): T
}
