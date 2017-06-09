# Passwordjs

### A Layer of Abstraction over Encryption Algorithms which allows easy generation of Hashes from Strings

This Module basically contains Multiple Encryption Algorithms which you can then use directly with a single helper Function which Returns a Promise Object that contains either your hash or an error message. The API is pretty simple with just 1 Method that allows easy switching between algorithms.


## Supported Algorithms

- Bcrypt
- Sha256
- Sha512
- MD5

## Basic Example
```javascript
var pwd = require('passwordjs')

pwd.encrypt('stringToEncrypt', 'sha256').then(hash => {
    console.log(hash)
}).catch(err => {
    throw err
})
```

## 