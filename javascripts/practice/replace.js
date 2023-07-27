
function replace(string){
   var str = string.split("");
 str.splice(1,1,"a")
    console.log(str.join(""));
}
let ak = replace("xyza")
