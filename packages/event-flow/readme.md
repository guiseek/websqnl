# Event Flow

## Install

**npm**

```sh
npm install @websqnl/event-flow
```

**pnpm**

```sh
pnpm add @websqnl/event-flow
```

**yarn**

```ts
yarn add @websqnl/event-flow
```

## How to use

### The `StateEventMap`

Create an interface named **`StateEventMap`**, the name must be exactly as described, it will contain keys and values ​​where each key informs its respective type for the value.

```ts
interface StateEventMap {
  ping: Date
}
```

### The targets

```ts
import {createTarget} from '@websqnl/event-flow'

export const onPing = createTarget('ping')
```

then

```ts
import {onPing} from './targets'

onPing((value) => {
  console.log(`ping`, value)
})
```

### The events

```ts
import {createEvent} from '@websqnl/event-flow'

export const ping = createEvent('ping')
```

then use the `dispatch` `function` `+` the previously created event

```ts
import {dispatch} from '@websqnl/event-flow'
import {ping} from './events'

const button = document.createElement('button')

button.textContent = 'Ping'

button.onclick = () => dispatch(ping(new Date()))
```