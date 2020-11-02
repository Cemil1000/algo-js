const readlineSync = require('readline-sync')
let age = readlineSync.question('rentre ton age : ');
console.log(age);

if (age>=18) {
    console.log("Tu es un adulte");
}
else{
    console.log("Tu n'es pas un adulte");
}