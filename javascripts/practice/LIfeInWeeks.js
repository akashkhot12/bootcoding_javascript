function lifeInWeeks(age) {
    let YearsOfRemaining = 90 - age;
    let leftDays = YearsOfRemaining *365;
    let leftWeeks = YearsOfRemaining * 52;
    let leftMonth = YearsOfRemaining * 12;

    // console.log(leftDays);
    // console.log(leftWeeks);
    // console.log(leftMonth);

    console.log(" Chetana you have " + leftDays+" days, " +leftWeeks+" weeks, and "+ leftMonth+" months left.");
}
let akash=lifeInWeeks(22)