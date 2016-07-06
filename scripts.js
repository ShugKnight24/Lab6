var temp;
var tempType;

// Temperature Converter
function tempConvert(temp, tempType) {
// Fahrenheit to Celsius
if (tempType === "F") {
console.log( "The temperature is " + ((temp * (9/5)) + 32) + " degrees C");
} else if (tempType === "C") {
// Celsius to Fahrenheit
console.log("The temperature is " + ((temp - 32)*(5/9)) + " degrees F");
} else {
console.log("Please enter F or C for the temperature type, and the number in degrees of the temperature!");
}
}
tempConvert (212, "C"); // > 100
tempConvert (32, "C"); // > 0
tempConvert (65, "C"); // > 18.333
tempConvert (-40, "F"); // > -40
