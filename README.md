# idem

Client browser fingerprinting mechanism.

### Usage

```js
const { Agent } = require('idem')

Agent()
  .detect()
  .then(res => {
    console.log('id:', res.id)
    console.log('data:', res.data)
  })

// > id: "29d99074"
// > data: { FontList: ["DejaVu Sans", ...], ... }
```
