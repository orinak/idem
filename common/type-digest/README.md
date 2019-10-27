# `type-digest`

> **digest** _(noun)_
> 
> - a summation or condensation of a body of information

> A hash function is any function that can be used to map data of arbitrary size 
> to fixed-size values. The values returned by a hash function are called hash 
> values, hash codes, _digests_, or simply hashes.

## Usage

```js
const Trait = require('@pouk/idem-type-trait')
const Digest = require('@pouk/idem-type-digest')

const data = {
  b: Trait.Nothing,
  a: Trait.GenericTrait('x'),
}

const id = Digest.MurmurHash3x64.fromObject(dataa)

console.log(String(id))
// > Digest.MurmurHash3x64("xxx..")
```

### Variants

- `MurmurHash3x64` - MurmurHash3 x64 128 bit 

### API
