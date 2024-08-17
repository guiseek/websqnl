// prettier-ignore
export const load = async <T>(generator: AsyncGenerator<T>) => {
  for await (const _ of generator) {/** */}
}
