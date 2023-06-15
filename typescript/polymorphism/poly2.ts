class Animal{
    area: any;
    constructor(area)
    {
        this.area=area;
    }


    walk(){
        console.log(this.area+" this name of animal found is america");
    }

}

class eating extends Animal{
    walk(){
        super.walk();
        console.log(this.area+" this is danger");
        
    }
}

class feature extends eating{
    walk(){
        super.walk();
        console.log(this.area+" it has been fastest animal in Jungle")
    }
}

let h1=new feature("leopard");
h1.walk();