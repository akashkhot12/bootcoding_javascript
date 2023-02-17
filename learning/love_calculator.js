// var name= prompt("what is your name ? ");
// var their_name = prompt("what is their name ?");

// var loveScore=Math.random()*100;
// loveScore = Math.floor()+1;

// if (loveScore>70) {
//    var alert= alert("Amazing ! your Love Score is "+loveScore+"% your love is true");
// }
// else{
//    var alert1 =  alert("your Love Score is "+loveScore+"%");
// }

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Who are you?', name => {
    console.log(`Hey there ${name}!`);
    readline.close();
  });