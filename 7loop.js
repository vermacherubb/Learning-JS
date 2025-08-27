// do while
let i = 0;
do {
    console.log("hello");
    i++;
}
while (i < 5); // This will print "hello" 5 times


//write a prohgram to print a table of any no

let a= parseInt(prompt("Enter a number to print its table:"));
let j = 1;
do {
    console.log(a*j);
    j++;
}
while (j <= 10); // This will print the multiplication table of the number entered


// take input from user till user enter 0
let num;
do {
    num = parseInt(prompt("Enter a number (0 to stop):"));
    
    }

while (num !== 0); 

