let x;

for (let i = 1; i <= 100; i++) {
    x =i%2;
    if (x == 0) {
        console.log(i/2);
    }
    else{
        console.log(i*3);
    }
}