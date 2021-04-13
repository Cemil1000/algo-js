const readlineSync = require('readline-sync');

function askTvSerie(){
    let tvSerie = {
        nameSerie: readlineSync.question("nom de ta serie pref : "),
        year: readlineSync.question("anne de production de ta serie pref : "),
        nameActeur: []
    };
    let userNumber = Number.parseInt(readlineSync.question("nombre d'acteurs de la serie : "));
    for (let n = 0; n < userNumber; n++) {
        tvSerie[nameActeur].push(readlineSync.question("Nom d'un acteur : "))
    }
    console.log(tvSerie);
}

askTvSerie();