// sum of all digit of given number. e.g = 1234 =>10
function printDigit(n) {
    var sum = 0;
    var rem;
    while (n != 0) {
        rem = n % 10;
        sum += rem; //4
        n = Math.floor(n / 10); //123
    }
    return sum;
}
var a = printDigit(1234);
console.log(a);
