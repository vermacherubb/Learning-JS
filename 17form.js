function formdata(){
    let inp = document.querySelector("#name").value
    alert(inp)

    let age = document.querySelector("#age").value
    alert(age)

    let email = document.querySelector("#email").value
    alert(email)
}


function addition(){
    let no1 = parseFloat(document.querySelector('#no1').value)
    let no2 = parseFloat(document.querySelector('#no2').value)
    res = no1 + no2
    if(res %2==0){
        let result = document.querySelector("#result")
         result.textContent = res
         result.style.color = "red";

    }
    else{
        let result = document.querySelector("#result")
         result.textContent = res*res*res
         result.style.fontstyle= "italic"
    }

    return false
}

//To not send value to datbase and  retain the value in page and not to refresh write
// retutn false and write return in html page before passing function.


//Write a program take two inputs from user and add both of them check the addition is even or odd if addition is even then print on document page with colour red
//and if the addition is odd then print cube of that no document page in italic form

