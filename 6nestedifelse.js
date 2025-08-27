// nested ifelse
let age = parseInt(prompt("Enter your age:"));
if (age >=18) {
    let n = parseInt(prompt("Enter your number:"));
    if(n==1){
        console.log("elegible for voting")

    }
    else{
        console.log("not eligible")

    }
}
else{
    console.log("you are under age")
}
