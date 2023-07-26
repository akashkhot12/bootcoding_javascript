function isLeap(year){
    if (year%4==0) {
       if(year%100==0){
        if(year%400==0){
            statement()
        }
        else {
            cFalseStatement();
        }
       }
       else
       {
        statement()
       }
    }
    else{
        FalseStatement();
    }
}
let leapOrNot = isLeap (1245);

function statement(){
    console.log(
        "this is leap year"
    );
}

function FalseStatement(){
    console.log("Not leap year");
}