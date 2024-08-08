const crypto = require('crypto');

const input = "Nayan Swarnkar";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash) 

// const hash = crypto.createHash('sha256').update(input).digest('hex');
// This line creates a SHA-256 hash of the input string.