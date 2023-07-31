function Sum(n) {
    let sum = 0 , rem 
    while (n != 0 ) {
        rem = n%10;
        sum +=rem;
        n = Math.floor(n/10)
    }
console.log(sum);
}
Sum(123)