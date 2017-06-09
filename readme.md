# Passwordjs

### A Layer of Abstraction over Encryption Algorithms which allows easy generation of Hashes from Strings and Comparison of Passwords to Hashes.

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
        pwd.encrypt(string, algorithm).then(e => {
            console.log(e) // hash-here
        }).catch(er => {
            throw er // err here
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
        pwd.compare(string, hash, algorithm).then(e => {
            console.log(e) // true / false
        }).catch(er => {
            throw er // err here
        })
    ```

# License

Copyright [Daksh Miglani](https://dak.sh/), Licensed Under MIT 2017.