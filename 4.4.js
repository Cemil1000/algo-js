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
function average(array) {
    let s, nbr=0;
    for (let i = 0; i < array.length; i++) {
        nbr += array[i];
        s = nbr/array.length;
    }
    console.log(s);
}
function min(array) {
    let min = Math.min.apply(0, array);
    console.log(min);
}
function max(array) {
    let max = Math.max.apply(0, array);
    console.log(max);
}

let n = readlineSync.question('Rentre le nombre de nombre aleatoires ');
multiRand(n);
console.log(array);
average(array)
min(array);
max(array);