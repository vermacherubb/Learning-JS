function submitt() {
    let name = document.querySelector('#name').value.trim()
    let age = document.querySelector('#age').value.trim()
    let city = document.querySelector('#city').value.trim()
    let email = document.querySelector('#email').value.trim()
    let pass = document.querySelector('#pass').value
    let psss = document.querySelector('#psss').value

    if (name === "") {
        alert("Please enter the name")
        document.querySelector('#name').focus()
        return false
    }
    else if (age === "") {
        alert("Please enter the age")
        document.querySelector('#age').focus()
        document.querySelector('#error').textContent = "Enter the age"
        return false
    }
    else if (city === "") {
        alert("Please enter the city")
        document.querySelector('#city').focus()
        return false
    }
    else if (!(email.endsWith('@gmail.com'))) {
        alert("Please enter a valid Gmail")
        document.querySelector('#email').focus()
        return false
    }
    else if (!(pass.match(/[!@#$%]/))) {
        alert("Password must contain at least one special character (!@#$%)")
        document.querySelector('#pass').focus()
        return false
    }
    else if (psss !== pass) {
        alert("Passwords do not match")
        document.querySelector('#psss').focus()
        return false
    }

  
  
}




