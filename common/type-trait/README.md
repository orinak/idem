# `type-trait`

> **trait** _(noun)_
> 
> - a distinguishing quality (as of personal character)
> - an inherited characteristic

## Usage

```js
const Trait = require('@pouk/idem-type-trait')

const value = [
  'Courier',
  'DejaVu Sans Mono'
]

const getString = value => '[' + value.join(', ') + ']'

const trait = new Trait({ getString }, value)

console.log(String(Trait.of(value)))
// > "(SystemFonts: Courier,DejaVu Sans Mono)"

console.log(String(Trait.create({ getString }, value)))
// > "(SystemFonts: [Courier, DejaVu Sans Mono])"
```

### API

#### `Trait.of(value)`

#### `Trait.create(extensions, value)`
