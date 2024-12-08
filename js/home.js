const userName = localStorage.getItem('sessionName');


document.querySelector('section>span').innerHTML = `${userName}`;

const logoutBtn = document.querySelector('button');

logoutBtn.addEventListener('click', ()=>{
    localStorage.removeItem('sessionName');
    window.open('index.html', '_self');
});