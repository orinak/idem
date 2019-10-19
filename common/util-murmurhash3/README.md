# MurmurHash3.js

**A javascript implementation of MurmurHash3 hashing algorithms.**

## Usage

```js
// Return a 32bit hash as a unsigned int:
murmurHash3.x86.hash32("I will not buy this record, it is scratched.")
// > 2832214938

// Specify a seed (defaults to 0):
murmurHash3.x86.hash32("My hovercraft is full of eels.", 25)
// > 2520298415

// Return a 128bit hash as a unsigned hex:
murmurHash3.x86.hash128("I will not buy this tobacconist's, it is scratched.")
// > "9b5b7ba2ef3f7866889adeaf00f3f98e"
murmurHash3.x64.hash128("I will not buy this tobacconist's, it is scratched.")
// > "d30654abbd8227e367d73523f0079673"
```

## Acknowledgements

- https://github.com/karanlyons/murmurHash3.js
- http://code.google.com/p/smhasher/source/browse/trunk/MurmurHash3.cpp?spec=svn145&r=144
