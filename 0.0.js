const readlineSync = require('readline-sync')

function transform(nbr) {
    let array = []
    let j = 0
    if (nbr > 15) {
        console.log("chiffre trop grand");
    }else{
        for (let i = 1; i <= nbr; i++) {
            if (i < 10) {
                array.push(i)
                let array2= array.reverse()
                console.log(array2);
                array2 =array
            }else{
                let arrayLettre = ["A","B","C","D","E","F"]
                array.push(arrayLettre[j])
                console.log(array);
                j++
            }
        }
    }
}

let n = readlineSync.question('>Transform :');
transform(n)