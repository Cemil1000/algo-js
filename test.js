let arr = [1,2,3,4,5];

let nbr=0, n=0;
for (let i = 0; i < arr.length; i++) {
    nbr += arr[i];
    n = nbr/arr.length;
}
console.log(n);