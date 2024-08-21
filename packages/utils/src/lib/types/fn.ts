export interface Fn<T> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (...params: any[]): T
}
