// Document Object Model (DOM)
// TO UPDATE AOR CHANGE ANY THING INSIDE HTML AND CSS USING JAVA SCRIPT IS CALLED DOM
// DOM IS A INTERFACE THAT ALLOWS PROGRAMMATIC ACCESS TO HTML AND XML DOCUMENTS
// ELEMENT IS CALLED NODE
// TEXT IS CALLED TEXT NODE


document.write("<h1> Hello world <br> Hello universe </h1>")


let hd = document.getElementById("head")
console.log(hd);
// get element by id only returns single node
// hd.textContent = "Hello quasim sir"
h = hd .textContent
console.log(h);


// TO APPLY TAGS WITH TEXT
hd.innerHTML = "<u> Hello quasim sir </u>"  


let head2 = document.getElementById("head2")   
head2.setAttribute('align','center')
// attribute name and value


document.body.removeAttribute('bgcolor')

let hi = document.getElementById("hi")
hi.setAttribute('align','center')




let change =document.getElementById("head")
change.textContent = "thankyou"

let yo = document.getElementById("head2")
yo.innerHTML= "<i> hello how are you</i>"

let list = document.getElementById("list")
list.removeAttribute("type")







