function getSum(n) {
    let sum =0 ; let res;
    res = n%10;
    sum+=res;
    n = Math.floor(n/10);
}

function getValue(array) {
    let getRes = [];
    let value
    for (let index = 0; index < array.length; index++) {
        value = getSum(array[index])
        getRes.push(value)
    }
}

console.log(getValue([123,23,345]));