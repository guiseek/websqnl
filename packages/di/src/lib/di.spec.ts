import {provide, provides, load, use} from './di'
import {createToken} from './token'
import {Alias} from './alias'

abstract class Abstract {
  abstract hello(): string
}

class Implementation implements Abstract {
  hello() {
    return 'hello'
  }
}

class A {}

class B {
  constructor(public a: A) {}
}

interface ResolveCallback<T> {
  (value: T | PromiseLike<T>): void
}

interface RejectCallback {
  (reason?: unknown): void
}

interface AsyncCallback<T> {
  (resolve: ResolveCallback<T>, reject: RejectCallback): void
}

function async<T>(fn: AsyncCallback<T>) {
  return new Promise<T>(fn)
}

const tokenFactory = createToken('factory')
const useFactory = async((resolve) => {
  setTimeout(() => resolve(123), 1000)
})

describe('di', () => {
  test('token with value', async () => {
    const date = new Date()
    const token = new Alias('date.token')

    provide({ref: token, use: date})

    await load()

    expect(use(token)).toBe(date)
  })

  test('token with factory', async () => {
    const date = new Date()
    const token = new Alias('date.token')

    provide({ref: token, use: () => date})

    await load()

    expect(use(token)).toBe(date)
  })

  test('abstract with implementation', async () => {
    provide({ref: Abstract, use: Implementation})

    await load()

    expect(use(Abstract)).toBeInstanceOf(Implementation)
  })

  test('class with dependency', async () => {
    provides({ref: A}, {ref: B, dep: [A]})

    await load()

    const b = use(B)

    expect(b).toBeInstanceOf(B)
    expect(b.a).toBeInstanceOf(A)
  })

  test('class with dependency factory', async () => {
    provides({ref: A}, {ref: B, use: (a: A) => new B(a), dep: [A]})

    await load()

    const b = use(B)

    expect(b).toBeInstanceOf(B)
    expect(b.a).toBeInstanceOf(A)
  })

  test('async dependency', async () => {
    const fnFactory = jest.fn()

    class Age {
      constructor(value: number) {
        //
      }
    }

    provides(
      {
        ref: tokenFactory,
        use: useFactory,
      },
      {
        ref: Age,
        use(value: number) {
          fnFactory(value)
          return new Age(value)
        },
        dep: [tokenFactory],
      }
    )

    await load()

    const b = use(Age)

    expect(b).toBeInstanceOf(Age)
    expect(fnFactory).toHaveBeenCalledWith(123)
  })
})
