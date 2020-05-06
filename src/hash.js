var jsSHA = require('jssha')
var sha = new jsSHA('SHA-512', "TEXT");


sha.update('hashSequece')
var hashKey = sha.getHash("HEX")

console.log(hashKey)