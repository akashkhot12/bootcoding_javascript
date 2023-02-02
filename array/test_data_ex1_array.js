// WAP that accepts an employee's ID, total worked hours of a month and the amount he received per hour. Print the employee's ID and salary (with two decimal places) of a particular month.
// Test Data :
// Input the Employees ID(Max. 10 chars): 0342
// Input the working hrs: 8
// Salary amount/hr: 15000
// Expected Output:
// Employees ID = 0342
// Salary = U$ 120000.00
{
  let id = 0342;
  let hour = 8;
  let salary = hour * 15000;
  console.log("your employee id is " + id + ".");
  console.log("your salary is " + salary + ".");
}

// exercise2

// input array is [-43,0, 34, 0, 55], shift all 0s to the end of array [-43,34,55,0,0]

function testData(a) {
  let b = 0;
  const arr = [];
  for (const item of a) {
    if (item === 0) b++;
    else arr.push(item);
  }
  for (let i = 0; i < b; i++) {
    arr.push(0);
  }
  return arr;
}
console.log(testData([-43, 0, 34, 0, 55]));







//WAP that accepts 4 integers p, q, r, s from the user where q, r and s are positive and p is even. If q is greater than r and s is greater than p and if the sum of r and s is greater than the sum of p and q print "Correct values", otherwise print "Wrong values".

let p =1;
let q = 35 ;
let r = 15;
let s = 46;
sum_1 = r+s;
sum_2 =p+q;

function testData(p,q,r,s){
    if ((p>r || p>s) && sum_1>sum_2) {
        
        console.log("this is correct value")

    }
    else{
        console.log("this is wrong value");
    }
}



//WAP that reads an integer between 1 and 12 and print the month of the year in English.
// Test Data :
// Input a number between 1 to 12 to get the month name: 8
// Expected Output:
// August


let a=[1,2,3,4,5,6,7,8,9,10,11,12]
let b=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let display= b[7];
console.log(display);




// exercise 3
// WAP to calculate a bike’s average consumption from the given total distance (integer value) travelled (in km) and spent fuel (in litres, float number – 2 decimal point).
// Test Data :
// Input total distance in km: 350
// Input total fuel spent in liters: 5
// Expected Output:
// Average consumption (km/lt) 70.000


{
    let km= 350;
    let liters= 5;
    let  average= km/liters;
    average=average.toFixed(3);
    console.log(average);
    }