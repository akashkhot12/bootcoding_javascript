var sellingPrice = 199;
var listingPrice = 1000;
var discountPercent = ((listingPrice - sellingPrice)/listingPrice)*100;

// console.log(discountPercent);

displayDiscountPercentage= Math.round(discountPercent);


console.log(displayDiscountPercentage + "% off");