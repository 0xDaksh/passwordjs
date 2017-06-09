/**
 * Passwordjs
 * A Module that can perform multiple encrypting algorithms and can verify passwords.
 *
 * @name Password
 * @function
 * @return {Promise} A promise object.
 */
// imports
var bc = require('bcryptjs'),
    sha = require('sha.js'),
    md5 = require('md5')
// variables
const algorithms = ['bcrypt', 'sha256', 'md5', 'sha512']
let sha256 = sha('sha256'),
    sha512 = sha('sha512')
// functions
var password = () => {
    return new Promise((done, reject) => {
        reject('Please use the methods provided.')
    })
}

password.encrypt = (string, algorithm) => {
    return new Promise((done, reject) => {
        if(algorithms.indexOf(algorithm.toLowerCase()) !== -1) {
            let index = algorithms.indexOf(algorithm.toLowerCase())
            switch(algorithms.indexOf(algorithm)) {
                case 0:
                    bc.hash(string, 10, (err, hash) => {
                        if(!err) {
                            done(hash)
                        } else {
                            reject(err)
                        }
                    })
                    break;
                case 1:
                    done(sha256.update(string, 'utf8').digest('hex'))
                    break;
                case 2:
                    done(md5(string))
                    break;
                case 3:
                    done(sha512.update(string, 'utf8').digest('hex'))
                    break;
            }
        } else {
            reject('We do not support any algorithm which is named ' + algorithm + ' Please Use a different Algorithm')
        }
    })
}

module.exports = password
