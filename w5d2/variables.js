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

// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."