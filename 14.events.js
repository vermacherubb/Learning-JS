function fun(){
    alert("cookies")
}
function fun2(){
  let js = document.getElementById("hi")
  js.innerHTML="welcome to js"
}

/*function red(){
    document.body.style.backgroundColor = "red"
    document.getElementById("colours").textContent = "red"

}

function green(){
    document.body.style.backgroundColor = "green"
     document.getElementById("colours").textContent = "green"

}

function blue(){
    document.body.style.backgroundColor = "blue"
     document.getElementById("colours").textContent = "blue"

}
//  making changes by using single function*/

function change(colour){
    document.body.style.backgroundColor = colour
    document.getElementById("colours").textContent = colour
}
 
function add(){
    let no1 = parseFloat(prompt("enter the no"))
    let no2 = parseFloat(prompt("enter the no"))
    let add12 = no1 + no2
    document.getElementById("result").textContent = add12
    result.style.backgroundColor = "green"
    result.style.css = "padding :40px,border:2px solid black;margin:20px font-size:30px"  
    

     

}
// add button to add two numbers and show the result in span tag
let  btn = document.getElementById("centr")
let move = false
function centr(){
    if(!move){
        btn.style.cssText = "position : relative; left: 200px; transition: all 0.5s ease-in-out"
        move = true
    }
    else{
        btn.style.cssText = "position : relative; left: 0px; transition: all 0.5s ease-in-out"
        move = false
    }
}

