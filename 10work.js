// . WAP to take string "Hello" from the user and compare it if "Hello" is equal to "Hello" then print "Hello World"\ 
let user = prompt("enter the word")
if(user=="Hello"){
    console.log("Hello World")
}
else{
    console.log("Mismatched")
}



// WAP to check user's age is greater then 23 or not ?

let age = prompt(parseInt("enter your age"))
    if (age >= 23) {
        console.log("You are older than 23");
    }
    else {
        console.log("You are not older than 23");
    }  


// WAP to check number is odd or even . if number is odd then find out area of circle if even then square of that number
let number = parseFloat(prompt("Enter a number:"));
if (number % 2 === 0) {
    console.log("Square of " + number + " is " + (number * number));
}
else {
    let radius = number;
    let area = Math.PI * radius * radius;
    console.log("Area of circle with radius " + radius + " is " + area);
}






// WAP to make student grade finder Take inputs of 5 subjects then print the grade according to percentage

let maths = parseFloat(prompt("Enter marks for Maths:"));
let science = parseFloat(prompt("Enter marks for Science:"));
let english = parseFloat(prompt("Enter marks for English:"));
let history = parseFloat(prompt("Enter marks for History:"));
let geography = parseFloat(prompt("Enter marks for Geography:"));

let totalMarks = (maths+science+english+history+geography) 
let percentage = (totalMarks / 500) * 100;
let grade;
if (percentage >= 90) {
    grade = "A+";
}
else if (percentage >= 80) {
    grade = "A";
}
else if (percentage >= 70) {
    grade = "B";
}
else if (percentage >= 60) {
    grade = "C";
}
else if (percentage >= 50) {
    grade = "D";
}       
else {
    grade = "F";
}
console.log("Total Marks: " + totalMarks);
console.log("Grade: " + grade);



// Take 3 inputs from the user and check 3 is +ve or -ve if number is positive then check it even or odd, if  even then add all 3 input if number is -ve then multiply of all inputs 
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let num3 = parseFloat(prompt("Enter third number:"));
if (num3 >= 0) {
    if (num3 % 2 === 0) {
        let sum = num1 + num2 + num3;
        console.log("Sum of all three numbers: " + sum);
    } else {
        console.log("Third number is odd, no addition performed.");
    }
}
else {
    let product = num1 * num2 * num3;
    console.log("Product of all three numbers: " + product);
}


