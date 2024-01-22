//Function to read the form
const form = document.addEventListener('submit', (event) => {
    event.preventDefault();
    var firstname = document.getElementById('fname').value;
    var lastname = document.getElementById('lname').value;
    var email = document.getElementById('Email').value;
    var password = document.getElementById('password').value;
    var repassword = document.getElementById('re-type').value;
    var addresss = document.getElementById('address').value;

    console.log(firstname)
    console.log(lastname)
    console.log(email)
    console.log(password)
    console.log(addresss)
    console.log(repassword)

    validateForm(password, repassword)



})

function validateForm(password,repassword) {
    if (password != repassword) {
        alert("Passwords do not match");
        return false;
    }
}


