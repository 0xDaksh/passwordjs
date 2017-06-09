# Passwordjs

[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](https://js.org/)
[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](https://github.com/Dakssh/passwordjs)
[![forthebadge](http://forthebadge.com/images/badges/check-it-out.svg)](https://www.npmjs.com/package/passwordjs)

#### A Layer of Abstraction over Encryption Algorithms which allows easy generation of Hashes from Strings and Comparison of Passwords to Hashes.

This Module basically contains Multiple Encryption Algorithms which you can then use directly with a single helper Function which Returns a Promise Object that contains either your hash or an error message. The API is pretty simple with just 1 Method that allows easy switching between algorithms.


## Supported Algorithms

- Bcrypt 
- Sha256
- Sha512
- MD5

## Hash Example
```javascript
var pwd = require('passwordjs')

pwd.encrypt('stringToEncrypt', 'sha256').then(hash => {
    console.log(hash)
}).catch(err => {
    throw err
})
```

## Compare Example
```javascript
    var pwd = require('passwordjs')
    pwd.compare('gg', 'y9PPubn1G7v78IdZ4kP1s1Gcv27MIZ7pX+fGZ+MsCo0=', 'sha256').then(e => {
        console.log(e) // true
    }).catch(er => {
        console.log(er)
    })
```

# API

### Encrypt
The Encrypt Method allows you to easily encrypt the Password with the following parameters as Input

- Password String
- Algorithm

It Returns The Following
    
- Promise Object
- Hash
- Error

Example 

```javascript
var pwd = require('passwordjs')
pwd.encrypt(string, algorithm).then(hash => {
    console.log(hash)
}).catch(err => {
    throw err // your hash
})
```

### Compare
The Compare Method allows you to easily compare the Password along all algorithms with the following parameters as Input

- Password String
- Hash
- Algorithm

It Returns The Following
    
- Promise Object
- Response (Boolean)
- Error

Example 
    
```javascript
    var pwd = require('passwordjs')
    pwd.compare(string, hash, algorithm).then(e => {
        console.log(e) // Boolean True / False
    }).catch(er => {
        console.log(er)
    })
```

# License

Copyright [Daksh Miglani](https://dak.sh/), Licensed Under MIT 2017.