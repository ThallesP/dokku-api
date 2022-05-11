import * as crypto from 'node:crypto';

console.log('A Wild token appears!');
const token = crypto.randomBytes(32).toString('hex');
console.log(token);
console.log('Make sure to catch it and paste it in your .env');
