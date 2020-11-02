const readlineSync = require('readline-sync')
let array = [];

function rand10() {
    return Math.floor(Math.random()*10+1);
}
function multiRand(n) {
    for (let i = 0; i < n; i++) {
        array.push(rand10());
    }
    return array;
}

let n = readlineSync.question('Rentre le nombre de nombre aleatoires ');
multiRand(n);
console.log(array);