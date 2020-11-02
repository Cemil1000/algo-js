const readlineSync = require('readline-sync')
let jour= readlineSync.question('rentre un chiffre entre 1 et 7');
console.log(jour);

if (jour == 1) {
    console.log("Lundi");
}
else if (jour == 2) {
    console.log("Mardi");
}
else if (jour == 3) {
    console.log("mecredi");
}
else if (jour == 4) {
    console.log("Jeudi");
}
else if (jour == 5) {
    console.log("Vendredi");
}
else if (jour == 6) {
    console.log("Samedi");
}
else{
    console.log("Dimanche");
}