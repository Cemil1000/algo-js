const readlineSync = require('readline-sync')
let min = readlineSync.question('min');
let max = readlineSync.question('max');
let current = readlineSync.question('current');
console.log(min+max+current);

if (min>=max) {
    console.log("Votre min est plus grand que votre max");
}
else{
    if (current>min && current<max) {
        console.log("yes");
    }
}