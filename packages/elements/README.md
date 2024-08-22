# @websqnl/elements

## All elements in an instantiable way

Examples

### `Anchor` element

```ts
const link = new Anchor({ text: 'Home', href: '/' })
```

### `Button` element

```ts
const button = new Button({
  type: 'button',
  onclick(e) {
    console.log(e)
  }
})
```


### `Select`, `Label` and `Section` elements

```ts
const state = new Select({ name: 'state', id: 'userState' })

const label = new Label({ text: 'State', htmlFor: 'userState' })

const section = new Section()

section.append(label, state)
```