
 interface typeOfClass{
    name:string;
   age:number;
   getMoral:()=>string
 }


 let users:typeOfClass={
  name:"akash",
  age:23,
getMoral:function(){
   return ("calling a coder")
  }
 }

 console.log(users)