function validateForm(name, email, password) {

    const nameRegex = /^[A-Za-z]+(?: [A-Za-z]+)*$/;
    if (!nameRegex.test(name)) {
        return "Invalid name. Only letters and spaces are allowed.";
    }
    
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        return "Invalid email format.";
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
        return "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, and one number.";
    }

    return "Success";
}

const registerForm = document.querySelector('form');
const formName = document.querySelector('input[name="name"]');
const formEmail = document.querySelector('input[name="email"]');
const formPassword = document.querySelector('input[name="password"]');
const formMessage = document.querySelector('#message');

registerForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    let person = {
        name: formName.value,
        email: formEmail.value,
        password: formPassword.value
    };
    let validationForm = validateForm(person.name, person.email, person.password);

    if(validationForm === 'Success'){
        if(addUser(person)){
            formMessage.innerHTML = validationForm;
            formMessage.classList.add('text-success');
        }
    }else{
        formMessage.innerHTML = validationForm;
        formMessage.classList.add('text-danger');
    }
    formName.value = "";
    formEmail.value = "";
    formPassword.value = "";

});


function addUser(user){
    console.log('add');
    
    let users = [];
    if(localStorage.getItem('users')){
        users = JSON.parse(localStorage.getItem('users'));
        if(checkUnique(user, users)){
            alert('user exist.');
            return 0;
        }
        users.push(user);
    }else{
        users.push(user);
    }
    localStorage.setItem('users', JSON.stringify(users));
    return 1;
}

function checkUnique(user, users){
    let exist = users.filter((u)=> u.name == user.name || u.email==user.email);
    return exist.length>0? 1:0;
}