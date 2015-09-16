// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1, num2){
  if (num1 > num2){
    return num1;
  }else{
    return num2;
  }
}

var round1 = greaterNum(5, 10);
console.log("The greater number of 5 and 10 is " + round1);
var round2 = greaterNum(10, 5);
console.log("The greater number of 10 and 5 is " + round2);

// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

function helloWorld(langCode){
  if(langCode == "fr"){
    return "Bonjour";
  }else if(langCode == "hw"){
    return "Shalom";
  }else if(langCode == "jp"){
    return "Konichiwa";
  }else{
    return "Hello World";
  }
}

console.log(helloWorld("fr"));
console.log(helloWorld("hw"));
console.log(helloWorld("jp"));
console.log(helloWorld("es"));


// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score){
  if(score < 50 ){
    return "F";
  }else if(score >= 50 && score < 60){
    return "D";
  }else if(score >= 60 && score < 70){
    return "C";
  }else if(score >= 70 && score < 80){
    return "B";
  }else if(score >= 90 && score <= 100){
    return "A";
  }
}
console.log(assignGrade(45));
console.log(assignGrade(59));
console.log(assignGrade(63));
console.log(assignGrade(74));
console.log(assignGrade(88));
console.log(assignGrade(100));


// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, number){
  if(number == 1){
    return number + " " + noun;
  }else{
    return number + " " + noun + "s";
  }
}

console.log(pluralize("cat", 5));
console.log(pluralize("dog", 1));
