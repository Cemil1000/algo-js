let arr = [1,2,3,4,5];
let arr1 = [100,101,102];
let nbr=0;
let nrb=0;
let n=0;
let z=0;


for (let i = 0; i < arr.length; i++) {
    nbr += arr[i];
    n = nbr/arr.length;
}

for (let x = 0; x < arr1.length; x++) {
    nrb += arr1[x];
    z = nrb / arr1.length;
}

console.log(n +" "+ z);