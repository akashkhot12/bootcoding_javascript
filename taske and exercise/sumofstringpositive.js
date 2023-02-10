// let arr = [1, 2, 3, 4, -5];
function count(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i]>= 0) {
      sum = sum + a[i];
    }
}
return sum;
}

console.log(count([1, 2, 3, 4, -5]));
