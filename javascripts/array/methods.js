// const removeDuplicates = function (nums) {
//    let newUnique = [ ...new Set(nums)];
//    return newUnique;
//    };
//    console.log(removeDuplicates([1,1,2]));


// let array = [1,1,2,3,4,5,4,4,4,6,7,7]
// let uni = [...new Set(array)]
// console.log(uni);

// Remove Element

let array = [1,2,3,1,2,3]
console.log(array);
console.log(array.sort());
let num = 3
for (let index = 0; index < array.length; index++) {
    if (array[index]===num) {
        array.splice(num)
    }
    return array;
}
