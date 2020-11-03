function fact(nbr){
    let f = 1;
    for(let i = 1; i <= nbr; i++)  
    {
      f *= i;
    }  
    console.log(f);
}
function faact(nrb) {
    if (nrb === 0) {
        return 1;
    }
    return nrb* faact(nrb-1);
}

fact(4);
console.log(faact(5));