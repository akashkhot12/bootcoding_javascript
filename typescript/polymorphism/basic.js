class Jungle{

    constructor(name){
    this.name=name;
}


eat(){
    console.log(this.name+"eats food");
}
}

let n1=new Jungle(dog);
Jungle.eat();