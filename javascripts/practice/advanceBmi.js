function bmiCalculator (weight, height) {
    let bmi = weight/Math.pow(height,2)
    if(bmi <= 18.5){
        console.log("Your BMI is <bmi>, so you are underweight." +bmi);
    }
    else if(bmi>=18.5 && bmi<=24.9){
        console.log("Your BMI is <bmi>, so you have a normal weight." +bmi);
    }
    else {
       console.log( "Your BMI is <bmi>, so you are overweight." +bmi);
    }

}
let akash= bmiCalculator(140,7.7)