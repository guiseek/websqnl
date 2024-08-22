# @websqnl/di

## Base with implementation

```ts
abstract class Base {
  abstract hello(): string
}

class Implementation implements Base {
  hello() {
    return 'hello'
  }
}

await add({ref: Base, use: Implementation})

const base = use(Base)
```

## Class with dependency

```ts
class A {}

class B {
  constructor(public a: A) {}
}

await load(set({ref: A}, {ref: B, dep: [A]}))

const b = use(B)
```

## Dependency with factory

```ts
class A {}

class B {
  constructor(public a: A) {}
}

add({ref: A})

add({ref: B, use: (a: A) => new B(a), dep: [A]})

const b = use(B)
```

## With Token

```ts
const date = new Date()
const token = new Token('date.token')

await add({ref: token, use: date})

const myDate = use(token)
```

## Async dependency

```ts
const myToken = createToken('my.token')

const useAsyncFactory = async((resolve) => {
  setTimeout(() => resolve(123), 1000)
})

class Currency {
  constructor(value: number) {}
}

await load(
  set(
    {
      ref: myToken,
      use: useAsyncFactory,
    },
    {
      ref: Currency,
      use(value: number) {
        return new Currency(value)
      },
      dep: [myToken],
    }
  )
)
```
