//  function is a block of code
// that performs a specific task.
// thekr are two types of functions:
// 1. Built-in functions
// 2. User-defined functions
// Built-in functions are those which are already defined in JavaScript.
// User-defined functions are those which we define ourselves.


// syntax of function
// function functionName(parameters) {
//     // code to be executed
// }
//  identifier()  identifier of function is functionName 


// 1.funcction decleration(named function)
// 2.function definition(body of function)
// 3. function call


function Add()
{
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    let sum = num1 + num2;
    console.log("Sum is: " + sum);
}
// function call
Add()



// write a program to find area of circle input from user

function Area(){
    let radius = parseFloat(prompt("enter the radius of the circle"));
    let area = 3.14*radius*radius
    console.log("area of circle is"+ area)

}
Area()


// we have range from 1 to 10 which is divided into two equal parts take input from user if the input is from 1 to 5 print the table of input and if the input is from 6 to 10 print the square of odd no from 1 to 10 using function

function User(){
    let num1= parseInt(prompt("enter the no from 1 to 10"));
    if(num1<=5)
        for(i=1; i<=10; i++)
        {
            console.log(num1 + " x " + i + " = " + (num1 * i));
        }
               
    else if(num1>5 && num1<=10)
        for(i=1;i<=10;i++)
        {
            if(i % 2 !== 0) {
                console.log("Square of " + i + " is " + (i * i));
            }
        } 
    else{
        console.log("invalid input")
    }     


        
}
User()

// types of user define functions
// 1. function without argument and without return type
// 2. function with argument and without return type   
// 3. function without argument and with return type
// 4. function with argument  and with return type


// what is argument and parameter
// argument is a value that is passed to a function when it is called. it is actual value
// parameter is a variable that is used to store the value of an argument.

// ex of parametr and argument
// function greet(name) {  name is parameter
//     console.log("Hello, " + name + "!");
// }
// greet("Alice"); "Alice" is argument
// greet("Bob");  "Bob" is argument

// parameter and argument works as a input and output function


// 1. function without argument and without return type
function greet(){
    console.log("Hello, World!");
}
greet();

// 2. function with argument and without return type
function greet(name){
    console.log("Hello, " + name + "!");
}
greet("Alice");
greet("Bob");


// write a program to find are a of circle using function with argument and without return type
let radius = parseFloat(prompt("enter the radius of the circle"));
function Area(a){
    console.log(3.14*a*a)

}
Area(radius)

// write a program to check function is even or odd
let no = parseInt(prompt("enter the no"))
function check(a){
    if(a % 2 === 0)  
        console.log(a + " is even");
    else
        console.log(a + " is odd");

}
check(no)

// 3. function without argument and with return type
function Add(){
    let num1 = parseFloat(prompt("Enter first number:"));
    let num2 = parseFloat(prompt("Enter second number:"));
    return num1 + num2; // return the sum


}
Add()
console.log( Add()); // call the function and print the result
let result = Add(); // store the result in a variable
console.log(result);


// 4. function with argument and with return type
function demo(hi){
    return hi*hi


}
console.log(demo(10));



// writa a program to take name from user and return it using  with argument and returnt type?
let yourname = prompt("enter your name");
function name(myname){
   
    return myname

}
console.log(name(yourname))


// write a program to take input from the user and return it square with argument and return value?
let num6= parseFloat(prompt("Enter first number:"));
function square(num6){
    return num6*num6

}
console.log(square(num6))




// write a program to find sum of all no between 1 to 10 without argument and return value

function sumofall(){
    let a =0
    for(i=1;i<=10;i++){
        a = a+i
    }
    return a



}
console.log(sumofall())


// user define function consists of two types
// 1. anonymous function
// 2. self invoking function    

// 1. anonymous function
// anonymous function is a function that does not have a name.  
// it is also called as function expression.
// it is used when we want to create a function that is used only once.
// it is also used when we want to create a function that is passed as an argument to another function.
// it is also used when we want to create a function that is returned from another function.
// it is also used when we want to create a function that is assigned to a variable.
// syntax of anonymous function
// let functionName = function(parameters) {
//     // code to be executed
// };
// functionName(); // call the function
let multiply = function(num1, num2) {
    return num1 * num2;
};
console.log(multiply(5, 10)); // call the function and print the result
let result1 = multiply(5, 10); // store the result in a variable        
console.log(result1);










