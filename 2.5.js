const readlineSync = require('readline-sync')
let nbr = 0;

while (nbr != 42) {
    nbr = readlineSync.question('Your favorite number ')
    console.log(nbr);
}