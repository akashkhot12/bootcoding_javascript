namespace system{
    export class computerCycle{
        computerParts(){
          var arr:[Number,string,boolean]
          arr=[1,"printer",true]

          return arr;
        }
    }
}

let s1=new system.computerCycle();
console.log(s1.computerParts());
