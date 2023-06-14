class electronics{
    name;
    setElectric(select){
        this.name=select
    }
}

class Status extends electronics{

    getElectric(){
        return this.name;
    }
}

let t1=new Status();
t1.setElectric("danger");
console.log(t1.getElectric());



