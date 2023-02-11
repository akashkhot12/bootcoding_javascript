function equality(a,b){
    a=a.split("");
    b=b.split("");

 let  c=a.length;
  let d=b.length;
   if(c==d){
    return true;
   }
   else{
    return false;
   }

}

let compare = equality('abc','xyz');
console.log(compare);