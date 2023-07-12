class observe{
    firstName:string;
    secondName:string;
    age:number;
    
    constructor(firstName:string, secondName:string, age:number){
        this.firstName=firstName;
        this.secondName=secondName;
        this.age=age;
    }
    getFirstName(){
        console.log("my first name is" +this.firstName);
    }
}
let ob = new observe("akash","khot",25);
ob.getFirstName();