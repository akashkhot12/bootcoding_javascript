function fibonacciGenerator (n) {
    let array = []
 if(n===1){
    array=[0]
 }
else if (n===2){
    array = [0,1]
}
else{
    array = [0,1];

    for (let index = 2; index <= n; index++) {
        array.push(array[array.length-2]+array[array.length-1])
    }
}
return array
}
    console.log(fibonacciGenerator(10));