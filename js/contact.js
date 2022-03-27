const contactForm = document.querySelector("#contactForm");

const firstName = document.querySelector("#firstName");
const errorFirstName = document.querySelector("#errorFirstName");

const subject = document.querySelector("#subject");
const errorSubject = document.querySelector("#errorSubject");

const address = document.querySelector("#address");
const errorAddress = document.querySelector("#errorAddress");

const email = document.querySelector("#email");
const errorEmail = document.querySelector("#errorEmail");





function validatingForm() {
    event.preventDefault()

    if(testValueOfInput(firstName.value, 0)) {
        errorFirstName.style.display = "none"
    }
    else {
        errorFirstName.style.display = "block"
    }

    if(testValueOfInput(subject.value, 9)) {
        errorSubject.style.display = "none"
    }
    else {
        errorSubject.style.display = "block"
    }
    if(testValueOfInput(address.value, 24)) {
        errorAddress.style.display = "none"
    }
    else {
        errorAddress.style.display = "block"
    }

    if(validatingEmail(email.value) === true) {
        errorEmail.style.display = "none";
    }
    else {
        errorEmail.style.display = "block";
    }
    
    
    
}

function testValueOfInput(value, number) {
    if(value.trim().length > number) {
        return true
    }
    else {
        return false
    }
}

function validatingEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const matches = regEx.test(email);
    return matches;
}

contactForm.addEventListener("submit", validatingForm);