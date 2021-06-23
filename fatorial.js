const fatorial = function nFat(n) {
    if(n == 0){
        return 1;
    } else {
        return nFat(n - 1) * n;
    }
}

console.log(fatorial(3));  