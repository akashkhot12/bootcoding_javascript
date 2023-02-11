function distance(km){
  let  dist=10;
  let calc=dist*km;
  if(calc<=100){
    console.log("you have to pay 100 fuel");
  }
  else if(calc>100){
    console.log("you have to pay "+calc+".");
  }
  else{
    console.log("plese enter integer number !");
  }
}

let calculate= distance(30);
console.log(calculate);