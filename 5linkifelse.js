// ladder ifelse

let age = parseInt(prompt("Enter your age:"));
if (age < 0) {
    console.log("Invalid age entered.");
}
else if (age < 13) { 
    console.log("You are a child.");
}
else if (age < 20) {
    console.log("You are a teenager.");
}
else if (age < 60) {
    console.log("You are an adult.");
}
else {
    console.log("You are a senior citizen.");
}



