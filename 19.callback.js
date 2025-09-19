// when a function is passed inside parameter of another function callsed callback function
// function dempo(function){
//     
// }
// higher order function
// function sum(a,b,fn){ is called higher order function with callback function
// A Higher Order Function is a function that either:
// Takes another function as an argument (callback), or
// Returns another function as a result.



// settimeout(function(){
//     console.log("hello world")
// },2000)
// settimeout is higher order function
// function is callback function

// settimeout(fun timer) is in ms

// setTimeout(() => {
//     alert("hello world")
//     }, 4000);


// setTimeout(() => {
//     let imge = document.querySelector('#imagee')
//     imge.style.display = "block"
    
    
// }, 4000); 



// setinterval

// setInterval(() => {
//     console.log("hello")
// }, 1000);

let st
    let v = 0
function startt(){

    let counter = document.querySelector('#counter')
    st =setInterval(() => {
    counter.innerHTML= v++
    }, 1000);
}

function stop (){
    clearInterval(st)
}

function resett(){
    v=0
    counter.innerHTML = v
    stop(v)


}

let clickk = document.querySelector('#clickk')
clickk.addEventListener('click',()=>{
    alert ("working")
})

let dclickk = document.querySelector('#dclickk')
dclickk.addEventListener('dblclick',function(){
    alert("hello")
})
