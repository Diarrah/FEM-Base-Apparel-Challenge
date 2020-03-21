let form = document.querySelector('.form-control');
let email = document.querySelector('.email');
let error_msg = document.querySelector('.error-msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let emailVal = email.value.trim();

   if (emailVal === '') {
       form.className = 'form-control error'
       error_msg.innerText = `Email cannot be blank`
   } else if (!validateEmail(emailVal)) {
       form.className = 'form-control error'
       error_msg.innerText = `Please provide a valid email`
   } else {
       form.className = 'form-control success'
       error_msg.innerText = `You're on the list!`;
   }

});

// regex copied from StackOverflow //

function validateEmail(email) {
    let valid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return valid.test(String(email).toLowerCase());
}