export const throww = <T extends Error>(err: T | unknown) => {
  return new Error(`DataStore:` + (err instanceof Error ? err.message : ''))
}
