// sqaure star pattern
const pattern = (n,p)=>{
    let string = ""
    for (let index = 1; index <=n;index++) {
        for (let j = 1; j <= p; j++) {
           string+="*"; 
        }
        string+="\n"
    }
    return string;
}
console.log(pattern(5,6));