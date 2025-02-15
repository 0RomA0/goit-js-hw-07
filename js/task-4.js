const linkForm = document.querySelector(".login-form");

linkForm.addEventListener("submit", submitForm);


function submitForm(event)  {
    
    event.preventDefault();

    const email = event.target.elements.email.value.trim();
    const password = event.target.elements.password.value.trim();
    const formData = {
        email: email,
        password: password,
    }
   
        if (formData.email === "" || formData.password === "") {
         alert("All form fields must be filled in");
        }
        else {
            console.log(formData);
    }
    
    event.target.reset();
}
