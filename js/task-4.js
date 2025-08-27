const form = document.querySelector(".login-form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    const {email, password} = form.elements 
    const emailValue = email.value.trim()
    const passwordValue = password.value.trim()

      const formData = {
        email: emailValue,
        password: passwordValue
    }

    if(emailValue === "" || passwordValue === ""){
        alert('All form fields must be filled in')
    } else{
        console.log(formData);
        form.reset()
    }
    
})