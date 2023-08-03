let num = "";
for(let col=1;col<=5;col++){
    for(let sp =1 ; sp<=5-col;sp++){
        num+=" "
    }
    for(let row=1;row<=col;row++){
       num+=col
    }
    num+="\n"

}
console.log(num);