# `type-trait`

> **trait** _(noun)_
> 
> - a distinguishing quality (as of personal character)
> - an inherited characteristic

## Usage

```js
const Trait = require('@pouk/idem-type-trait')

const key = 'SystemFonts'
const value = [
  'Courier',
  'DejaVu Sans Mono'
]
const serialize = value => '[' + value.join(', ') + ']'

const trait = new Trait(key, value, serialize)

console.log(String(Trait(key, value)))
// > "(SystemFonts: Courier,DejaVu Sans Mono)"

console.log(String(Trait(key, value, serialize)))
// > "(SystemFonts: [Courier, DejaVu Sans Mono])"
```

### API

#### `Trait.create(key, value)`

#### `Trait.createCustom(key, value, serialize)`
