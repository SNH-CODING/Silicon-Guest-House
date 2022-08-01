//For login page validation
function loginvalidationFun() {
    //Get the data
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    //Call the functions
    if (!emailValidation(email) | !passwordValidation(password)) {
        return false;
    }
}

//For Registration page validation
function registrationvalidationFun() {
    //Get the data
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirm_password = document.getElementById("confirm_password").value;
    const terms_cond = document.getElementById("terms_cond");

    //Call the functions
    if (!emailValidation(email) | !passwordValidation(password) | !confirmpasswordValidation(password, confirm_password) | !terms_cond_Validation(terms_cond)) {
        return false;
    }
}

//Validation of Email
function emailValidation(email) {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email === "") {
        document.getElementById("email_error").innerHTML = "Field can't be empty";
        return false;
    } else if (!email.match(mailFormat)) {
        document.getElementById("email_error").innerHTML = "Please enter correct email address";
        return false;
    } else {
        document.getElementById("email_error").innerHTML = "";
        return true;
    }
}

//Validation of Password
function passwordValidation(password) {
    if (password === "") {
        document.getElementById("password_error").innerHTML = "Password can't be empty ";
        return false;
    } else if (password.length <= 8) {
        document.getElementById("password_error").innerHTML = "Password is too short";
        return false;
    } else if (!password.match(/[a-z]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain a lowercase letter";
        return false;
    } else if (!password.match(/[A-Z]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain a uppercase letter";
        return false;
    } else if (!password.match(/[0-9]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain a number";
        return false;
    } else if (!password.match(/[@,#,$,%]/)) {
        document.getElementById("password_error").innerHTML = "Password must contain a special letter";
        return false;
    } else {
        document.getElementById("password_error").innerHTML = "";
        return true;
    }
}

//Validation of Confirm Password
function confirmpasswordValidation(password, confirm_password) {
    //Validation for password
    if (confirm_password != password) {
        document.getElementById("confirm_password_error").innerHTML = "Field can't be empty";
        return false;
    } else {
        document.getElementById("confirm_password_error").innerHTML = "";
        return true;
    }
}

function terms_cond_Validation(terms_cond){
    if(!terms_cond.checked){
        document.getElementById("reg_terms_error").innerHTML = "Please check this field";
        return false;
    }else{
        document.getElementById("reg_terms_error").innerHTML = "";
        return true;
    }
}