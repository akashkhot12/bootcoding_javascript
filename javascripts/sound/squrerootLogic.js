function findRoot(number){
    for (let index = 0; index*index <= number; index++) {
       if (index*index ===number) {
        return index;
       }
    }
}

console.log(findRoot(16));