let pwd = require('./index')

// bcrypt
pwd.encrypt('ooooyeaah', 'bcrypt').then((b) => {
    console.log(b)
}).catch(e => {
    throw e;
}) 
// sha256
pwd.encrypt('ooooyeaah', 'sha256').then((b) => {
    console.log(b)
}).catch(e => {
    throw e;
}) 
// sha512
pwd.encrypt('ooooyeaah', 'sha512').then((b) => {
    console.log(b)
}).catch(e => {
    throw e;
}) 
// md5
pwd.encrypt('ooooyeaah', 'md5').then((b) => {
    console.log(b)
}).catch(e => {
    throw e;
}) 