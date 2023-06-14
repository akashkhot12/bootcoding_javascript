class Parents{
    name;
    setName(name){
        this.name=name
    }
}
class Child extends Parents{

    getName(){
        return this.name;
    }
}
    let a1=new Child();
    a1.setName("akash khot")
   console.log( a1.getName());
   
    
