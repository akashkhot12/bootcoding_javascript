class observing{
    firstName:string;
    secondName:string;
    age:number;

    getFirstName(){
        console.log("my first name is "+ this.firstName);
        
    }

    getSecondNameAge(){
        console.log("my second name is "+ this.secondName);
        
    }
}

let obj=new observing();
obj.firstName = "akash khot";
obj.getFirstName();