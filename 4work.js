//  Declare a variable using var, assign it a value, then reassign it with a new value and print both.

var js= "Hello, World!";
console.log(js); 
// reassigning the variable
js = "Hello, Universe!";  
console.log(js); 





//  Take 2 inputs from the user and find the area of triangle
let base = parseFloat(prompt("Enter the base of the triangle:"));
let height = parseFloat(prompt("Enter the height of the triangle:"));
let area = 0.5 * base * height;
console.log("The area of the triangle is: " + area);





//  Create two variables using let, assign them numbers, then swap their values using a temporary variable.
let firstNum = parseInt(prompt("Enter first number:"));
let secondNum = parseInt(prompt("Enter second number:"));
let temp = firstNum;
firstNum = secondNum;
secondNum = temp;   
console.log("After swapping: First number = " + firstNum + ", Second number = " + secondNum);




// Make simple calculator, take 2 integer inputs and one sign input (+-*/) and perfome the calculation
let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));
let operator = prompt("Enter operator (+, -, *, /):");
let result;

if (operator === "+") {
    result = num1 + num2;
} else if (operator === "-") {
    result = num1 - num2;
} else if (operator === "*") {
    result = num1 * num2;
} else if (operator === "/") {
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = "Error: Division by zero!";
    }
} else {
    result = "Invalid operator!";
}
console.log("Result:", result);






//  Take radius from the user and find area of circle.
let radius = parseFloat(prompt("Enter the radius of the circle:"));
let areaOfCircle = 3.14 * radius * radius;
console.log("The area of the circle is: " + areaOfCircle);



 
// Take a Celsius temperature in a variable and convert it to Fahrenheit.
let celsius = parseFloat(prompt("Enter temperature in Celsius:"));
let fahrenheit = (celsius * 9/5) + 32;
console.log("Temperature in Fahrenheit: " + fahrenheit);
