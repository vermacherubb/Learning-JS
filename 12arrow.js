// arrow function
// arrow function implicit return the value
// syntax
// () => { return } return is impiled only with curly braces used for multiple statements
// () => ()
// =>  need to pass parameter with this syntax

//arrow function without parameter
const fun = () => {return "Hello, World!"}
console.log(fun());

let fun1 = () => (2+4)
console.log(fun1());


// arrow function with parameter
let fun2 = (a,b) =>(a,b)
console.log(fun2(4,5));



let fun3 = name => name
console.log(fun3("quasim sir"));


// write a program to find area of circle using arro function with parameter?
let radius = parseFloat(prompt("enter the radius of circle"));
let area =radius => (3.14*radius *radius)
console.log(area(radius));

// write a program to take input from user and prints its square using arro function with parameters?
let inp = parseFloat(prompt("enter the no"));
let sqr = inp => (inp*inp)
console.log(sqr(inp));




