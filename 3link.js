let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));    
let sum = num1 + num2;
console.log("The sum is: " + sum);


// area of triangle
let base = parseFloat(prompt("Enter the base of the triangle:"));
let height = parseFloat(prompt("Enter the height of the triangle:"));
let area = 0.5 * base * height;
console.log("The area of the triangle is: " + area);


// two input from user in int and find square of both and add the square

let numA = parseInt(prompt("Enter first number:"));
let numB = parseInt(prompt("Enter second number:"));

let squareA = numA * numA;
let squareB = numB * numB;
let sumOfSquares = squareA + squareB;
console.log("The sum of squares is: " + sumOfSquares);


// two int no from user and swap them using third variable
let firstNum = parseInt(prompt("Enter first number:"));
let secondNum = parseInt(prompt("Enter second number:"));
let temp = firstNum;
firstNum = secondNum;
secondNum = temp;   
console.log("After swapping: First number = " + firstNum + ", Second number = " + secondNum);
