// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function fortuneTeller(kids, spouse, city, jobTitle){
  console.log("You will be a " + jobTitle + " in " + city + " , and married to " + spouse + " with " + kids + " kids");
}

fortuneTeller(5, "Irwin", "Toronto", "Billionaire");

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function calculateAge(birthYear, currentYear){
  var age = currentYear - birthYear;
  console.log("They are either " + age + " or " + (age -1));
}

calculateAge(1993, 2015);

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply(age, amountPerDay){
  var maxAge = 99;
  if (typeof(age) == "float"){
    age = Math.round(age);
  }
  var ageDifference = maxAge - age;
  var snackPerYear = amountPerDay * 365;
  var snackForLife = snackPerYear * ageDifference;

  console.log("You will need " + snackForLife + " to last you until the ripe old age of " + maxAge);
}

calculateSupply(22, 5.5);

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumference(radius){
  return radius * 2 * Math.PI;
}

function calcArea(radius){
  return Math.PI * Math.pow(radius, 2);
}

circumference = calcCircumference(6000);
area = calcArea(6000);

console.log("The circumference is " + circumference);
console.log("The area is " + area);

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celcius = 22;
function celsiusToFahrenheit(celc){
  return celc * 1.8 + 32;
}
var convertedToFahren = celsiusToFahrenheit(celcius);
console.log(celcius + "C " + "is " + convertedToFahren + "F");


var fahrenheit = 70;
function fahrenheitToCelsius(fahren){
  return (fahren - 32) / 1.8;
}
var convertedtoCelcius = fahrenheitToCelsius(fahrenheit);
console.log(fahrenheit + "F " + "is " + convertedtoCelcius + "C");
