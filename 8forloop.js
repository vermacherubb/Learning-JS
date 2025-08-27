// for loop
 for (let i = 1; i <= 10; i++) {
    // initilization,condition, increment
   console.log(i);
 }

//  for loop with condition
// in for loop, the condition is checked before each iteration
// if the condition is false, the loop stops 
for(let i = 10; i>=1;i--){
    console.log(i);
}


// write a program to print a table of any no using for loop

let table = parseFloat(prompt("Enter the table  no to print"));
for(let i= 1;i<=10;i++)
{
    console.log(table +"x"+ i + "=" + table*i)
}

// print square  of odd no from 25 to 1 and sum all even no


let a = 1
for (let i = 25 ; i >=1;i--){
    if( i % 2 !== 0) {
        console.log("Square of " + i + " is " + (i * i));
    }
    else{
    
    a = i*a
    }
   

}
 console.log("multiplication of even "+ a)


//  write a program which takes input from user and print the table of that no using for loop in reverse if it is even and if it is odd print as it is

let num = parseFloat(prompt("Enter a number to print its table:"));
if (num % 2 === 0) {
    for (let i = 10; i >= 1; i--) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}
else {
    console.log(num);

}


// from 1 to 15 print all no except 5 and 10 using for loop
for (let i = 1; i <= 15; i++) {
    if (i === 5 || i === 10) {
        continue;
    }
    console.log(i);
            
}

 
