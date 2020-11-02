function calcSurface(Long, larg) {
    return Long * larg;
}

const readlineSync = require('readline-sync')
Long = readlineSync.question('rentre Longeur ');
larg = readlineSync.question('rentre Largeur ');

console.log(calcSurface(Long, larg));