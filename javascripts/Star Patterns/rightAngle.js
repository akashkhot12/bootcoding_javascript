let string = "";
for (let row = 1; row <=4; row++) {
   for(let col =1 ; col<=row;col++){
    string+="*"
   }
   string+="\n"
}
console.log(string);