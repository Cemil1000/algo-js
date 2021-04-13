const readlineSync = require('readline-sync')

function trans(con) {
    let newcon = con.split('')
    let array2 = []
    let array = ["a","e","i","o","u", "y"]
    for (let i = 0; i < newcon.length; i++) {
        array2.push(newcon[i])
        for (let j = 0; j < array.length; j++) {
            if (newcon[i] === array[j]) {
                array2.push("p"+newcon[i])
            }
        }
    }
    console.log(array2.join(''));
}

let n = readlineSync.question('>Transform :');
trans(n)

const voyelles = ["a", "e", "i", "o", "u", "y"];

function transform(str) {
  newArr = str.split("");
  newStr = [];

  newArr.forEach((element) => {
    const isVoyelle = voyelles.includes(element);
    if (isVoyelle) {
      newStr.push(element + "p" + element);
      return;
    }
    newStr.push(element);
  });

  return newStr.join("");
}

console.log(transform("Ceci est un test pour HDM"));