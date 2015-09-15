//Exercise 1 The Fortune Teller
var numberOfChildren = 5;
var partnersName = "Scarlet Johansson";
var loc = "Toronto";
var jobTitle = "Billionaire";

console.log("You will be a " + jobTitle + " in " + loc + " , and married to " + partnersName + " with " + numberOfChildren + " kids.");

//Exercise 2 Age Calculator
var currentYear = 2015;
var birthYear = 1993;
var age = currentYear - birthYear;

console.log("They are either " + age + " or " + (age -1));

//Exercise 3 The Lifetime Supply Calculator

var currentAge = 22;
var maxAge = 99;
var snackPerDay = 5;

var ageDifference = maxAge - currentAge;
var snackPerYear = snackPerDay * 365;
var snackForLife = snackPerYear * ageDifference;

console.log("You will need " + snackForLife + " to last you until the ripe old age of " + maxAge);

//Exercise 4 The Geometrizer
var radius = 6375;
var circumference = radius * 2 * Math.PI;
var area = Math.PI * Math.pow(radius, 2);

console.log("The circumference is " + circumference);
console.log("The area is " + area);

//Exercise 5 The temperature Converter
var tempCelcius = 24;
var tempFarenheit = tempCelcius * 1.8 + 32;
console.log(tempCelcius + "C " + "is " + tempFarenheit + "F");
var tempCelcius2 = (tempFarenheit - 32) / 1.8;
console.log(tempFarenheit + "F " + "is " + tempCelcius2 + "C");