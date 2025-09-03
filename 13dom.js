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


let image = document.getElementById("image")
// image.src = "watch.jpg"

document.getElementById("css").style.backgroundColor = "aqua"
let css = document.getElementById("css")

css.style.padding = "40px"
css.style.cssText = "color:red; font-size:30px; font-family:arial; border:2px solid black; margin:20px"


// to reate  element or tag

let para = document.createElement("h1")
para.textContent =  "this text is created withe the hepl of js"
document.body.append(para)



let heading = document.createElement("i")
heading.textContent = "italic"
document.body.append(heading)

// to create list unorder list
let ul = document.createElement("ul")
let li1 = document.createElement("li")
li1.textContent = "mango"
ul.append(li1)
let li2 = document.createElement("li")
li2.textContent = "banana"
ul.append(li2)
let li3 = document.createElement("li")
li3.textContent = "grapes"  
ul.append(li3)
document.body.append(ul)


// to create image tag and add image

let imag = document.createElement("img")
imag.src = "watch.jpg"  
document.body.append(imag)
imag.style.width = "200px"
imag.style.height = "200px"
