let array = [1];

function rand10(max) {
    return Math.floor(Math.random()*Math.floor(10+1));
}
function multiRand(n) {
    for (let i = 0; i < n; i++) {
        array.push(rand10());
    }
}
console.log(array);