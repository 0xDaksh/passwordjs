/**
 * Passwordjs
 * A Module that can perform multiple encrypting algorithms and can verify passwords.
 *
 * @name Password
 * @function
 * @return {Promise} A promise object.
 */
// imports
const bc = require('bcryptjs'),
    md5 = require('md5'),
    crypto = require('crypto');
// variables
const algorithms = ['bcrypt', 'sha256', 'md5', 'sha512']
// functions
var password = () => new Promise((done, reject) => {
    reject('Please use the methods provided.');
});

password.encrypt = (string, algorithm) => new Promise((done, reject) => {
        if(algorithms.indexOf(algorithm.toLowerCase()) !== -1) {
            let index = algorithms.indexOf(algorithm.toLowerCase());
            switch(algorithms.indexOf(algorithm)) {
                case 0:
                    bc.hash(string, 10, (err, hash) => {
                        if(!err) {
                            done(hash);
                        } else {
                            reject(err);
                        }
                    })
                    break;
                case 1:
                    let sha256 = crypto.createHash("sha256");
                    sha256.update(string, 'utf8');
                    done(sha256.digest('base64'));
                    break;
                case 2:
                    done(md5(string));
                    break;
                case 3:
                    let sha512 = crypto.createHash("sha512");
                    sha512.update(string, 'utf8');
                    done(sha512.digest('base64'));
                    break;
            }
        } else {
            reject('We do not support any algorithm which is named ' + algorithm + ' Please Use a different Algorithm');
        }
    });


password.compare = (string, hash, algorithm) => new Promise((done, reject) => {
        if(algorithms.indexOf(algorithm.toLowerCase()) !== -1) {
            let index = algorithms.indexOf(algorithm.toLowerCase());
            switch(index) {
                case 0: 
                    bc.compare(string, hash, (err, resp) => {
                        if(!err) {
                            done(resp);
                        } else {
                            reject(err);
                        }
                    })
                    break;
                case 1: 
                    let e = crypto.createHash("sha256");
                    e.update(string, 'utf8');
                    if(e.digest("base64") === hash) {
                        done(true);
                    } else {
                        done(false);
                    }
                    break;
                case 2:
                    if(md5(string) === hash) {
                        done(true);
                    } else {
                        done(false);
                    }
                    break;
                case 3: 
                    let f = crypto.createHash("sha512");
                    f.update(string, 'utf8');
                    if(f.digest('base64') === hash) {
                        done(true);
                    } else {
                        done(false);
                    }
                    break;
            }
        } else {
            reject('Algorithm not found');
        }
    });

module.exports = password;
