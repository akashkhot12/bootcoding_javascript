let arr = [6, 1 , 3, 5, 9, 7, 8];
let min = arr[0];
let sd_min = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] < min) {
    min = arr[i];
  }

  if (arr[i] > min && arr[i] < sd_min) {
    sd_min = arr[i];
  }
}

console.log(sd_min);
