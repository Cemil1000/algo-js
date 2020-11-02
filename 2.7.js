const readlineSync = require('readline-sync')
let nbr = readlineSync.question('rentre chiffre ');
console.log();
let n=0;
let s=1;

for (let x = 0; x < nbr; x++) {
    n +=s
    s++
}

console.log(n);