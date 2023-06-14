class ClassRoom{
    classCategory;
    
    setCategory(value){
        this.classCategory = value 
    }
}

class Section extends ClassRoom{

    getSection(){
        return this.classCategory
    }
}

let category = new Section();
category.setCategory("A")
console.log(category.getSection())