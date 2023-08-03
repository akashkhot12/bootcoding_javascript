let number = "";
for(let row=1;row<=5;row++){
    for(let col=1;col<=row;col++){
       number+=row;
    }
    number+="\n"
}
console.log(number);