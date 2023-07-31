function Sum(n) {
    let sum = 0 , rem 
    while (n != 0 ) {
        rem = n%10;
        sum +=rem;
        n = Math.floor(n/10)
    }
return(sum);
}

function SumOfDigit(array) {
    let finalArray = [],result;
    for (let index = 0; index < array.length; index++) {
        result = Sum(array[index]);
        finalArray.push(result)
    }
    return finalArray;
}

console.log(SumOfDigit([123,234,345,456]));
