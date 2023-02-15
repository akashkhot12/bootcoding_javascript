let textfield = document.getElementById("array");
let arr = textfield.split(",");

function clr() {
  let textfield = document.getElementById("array");
  textfield.value = " ";
  document.getElementById("result").innerHTML = "clear succesfully !";
}

function del() {
  let textfield = document.getElementById("array");
  textfield.value = textfield.value.slice(0, -1);
}

function even() {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      console.log(arr[i]);
      document.getElementById("result").innerHTML =  "this value " + arr[i]+ " is prime number  ";
    }
  }
}

function odd() {
  for (let i = 0; i < arr.lengh; i++) {
    if (arr[i] % 2 != 0) {
      console.log(arr[i]);
      document.getElementById("result").innerHTML =
        "this value " + arr + " is odd number ";
    }
  }
}
