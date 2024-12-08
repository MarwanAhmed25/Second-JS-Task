const loginForm = document.querySelector('form');
const formEmail = document.querySelector('input[name="email"]');
const formPassword = document.querySelector('input[name="password"]');
const formMessage = document.querySelector('#message');

loginForm.addEventListener('submit', (e)=>{
    e.preventDefault();
   
    email = formEmail.value;
    password = formPassword.value;

    let users = getUsers();
    
    let user = checkExist({'email':email, 'password':password}, users);

    if(user){
        localStorage.setItem('sessionName', user.name);
        window.open('home.html', '_self');
    }else{
        formMessage.innerHTML = 'User not exist.';
        formMessage.classList.add('text-danger');
    }
    formEmail.value = "";
    formPassword.value = "";

});

function getUsers(){
    if(localStorage.getItem('users')){
        return JSON.parse(localStorage.getItem('users'));
    }
    return [];
}

function checkExist(user, users){
    let exist = users.filter((u)=> u.password == user.password && u.email==user.email);
    
    return exist.length > 0 ? exist[0] : null;
}