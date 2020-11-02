let array = [];

function rand10() {
    let nbr = Math.floor(Math.random()*5);
    return nbr;
}
function multiRand(n) {
    for (let i = 0; i < n; i++) {
        array.push(rand10());
    }
    return array;
}

let n = 5;
multiRand(n);
console.log(array);