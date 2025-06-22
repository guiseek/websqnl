import {singleton} from './decorators'
import {load, use} from './di'

abstract class Abstract {
  abstract hello(): string
}

@singleton([], Abstract)
class Implementation implements Abstract {
  hello() {
    return 'hello'
  }
}

class A {}

@singleton([A])
class B {
  constructor(public a: A) {}
}

describe('di', () => {
  beforeAll(async () => {
    await load()
  })

  test('decorator with abstract and imeplementation', async () => {
    expect(use(Abstract)).toBeInstanceOf(Implementation)
  })

  test('decorator with dependencies', async () => {
    const b = use(B)
    expect(b).toBeInstanceOf(B)
    expect(b.a).toBeInstanceOf(A)
  })
})
