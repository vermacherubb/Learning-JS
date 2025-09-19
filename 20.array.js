// // array  collection of diffrent data types
// // [] orderd indexing 
// let person = ["suneel",23,"satna",5.9,true]
// console.log(person);
// console.log(person[2]);

// // to print elements of array using loop
// for(a=0;a<5;a++){
//     console.log(person[a])
// }

// let student =[] 
// for(let i =0;i<5;i++){
//     student[i] = prompt("enter the elements")
// }
// console.log(student);


    
// // Print odd numbers between 15 and 1 into an array
// let odd = [];
// let no = 0;

// for (let a = 15; a >= 1; a--) {
//     if (a % 2 !== 0) {
//         odd[no] = a;   // store odd number in array
//         no++;
//     }
// }

// console.log(odd); // print array once



let no1 = [4,5,6,7,6,7,8,9,0,4,5,67,8,]
for(let i =0;i<Number.length;i++){
    console.log(no1[i]);
}
// to insert element at top of the array
let stu = ["shhubham",23,"bhopal"]
stu.push("India")
console.log(stu)

// to insert element at index 0 position
stu.unshift("mr")
console.log(stu)

// to remove top element from array
stu.pop("India")
console.log(stu)


// to remove first element form array
stu.shift("mr")
console.log(stu)

// to remove slice of element from array
let mee = ["bhopal","betul","itarsi","pune","mumbai"]
let myself = mee.slice(1,4)
console.log(myself);

// to remove a slice of array and print only odd no
let arrof = [1,2,3,4,6,7,8,4,5,6,7,8,9,3,4,5]
let pic =arrof.slice(0,5)
console.log(pic);
let oddno = []
let count =0
for(let i =0;i<pic.length;i++){
    if(pic[i]%2!==0){
        oddno[count]=pic[i]
        count++
    }
}
console.log(oddno);

// to delete element from middle  we use splice
let digit = [1,2,3,4,5,6,7]
digit.splice(3,2,"cherub")
// splice(indexno,no of elements,addelement)
console.log(digit);




// dhananjay magical word problem
let arr = [1,2,3,4,5,6,7,8,9]
let sum =0  






