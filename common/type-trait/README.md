# `type-trait`

> **trait** _(noun)_
> 
> - a distinguishing quality (as of personal character)
> - an inherited characteristic

## Usage

```js
const Trait = require('@pouk/idem-type-trait')

const availableFonts = [
  'Courier',
  'DejaVu Sans Mono'
]

const fontsTrait = Trait.GenericTrait(availableFonts)

console.log(String(fontsTrait))
// > Trait.GenericTrait(["Courier","DejaVu Sans Mono"])
```

### Variants

- `GenericTrait` - generic value constructor
- `Nothing` - generic empty object

### API

#### `Trait.empty()`

Return the empty (`Trait.Nothing`) version of this type.

```purescript
empty :: Nothing
```

#### `Trait.stringify(trait)`

Return the textual representation of given trait

```purescript
stringify :: Trait a => a -> String
```
