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

let h1=new eating("leopard");
h1.walk();