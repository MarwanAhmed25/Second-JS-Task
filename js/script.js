var siteName = document.getElementById('name');
var siteUrl = document.getElementById('url');
var submitBtn = document.getElementById('submit-btn');
var form = document.querySelector('form');
var tBody = document.querySelector('tbody');
var allObjects = JSON.parse(checkLocalStorage()); 
displayObjects();

function checkLocalStorage(){
    if (!localStorage.getItem('allObjects')) {        
        localStorage.setItem('allObjects', JSON.stringify([])); 
    }
    return localStorage.getItem('allObjects');
}

function validateURL(url) {
    const urlRegex = /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}([\/?].*)?$/;
    return urlRegex.test(url);
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    nameValue = siteName.value;
    urlValue = siteUrl.value;

    if (nameValue.length > 0 && validateURL(urlValue)) {
        saveNewObject({'name': nameValue, 'url': urlValue});
        siteName.value = '';
        siteUrl.value = '';
    } else {
        alert('Site Name must be at least 3 letters. Site URL must be a valid URL.');
    }

    displayObjects();
});

function saveNewObject(newObj) {
    if(checkExist(newObj.name)){
        
    allObjects.push(newObj);
    
    localStorage.setItem('allObjects', JSON.stringify(allObjects)); 
    }else{
        alert('Site Name exist');
    }
    
}

function displayObjects() {
    let objs = '';
    
    for (let i = 0; i < allObjects.length; i++) {
        objs += `<tr>
                    <td class="align-middle">${i + 1}</td>
                    <td class="align-middle">${allObjects[i].name}</td>
                    <td><a href="${allObjects[i].url}" target="_blank"><button class="btn btn-success"><i class="fa-solid fa-eye"></i> Visit</button></a></td>
                    <td><button class="btn btn-info" id="update-${i}"><i class="fa-solid fa-pen"></i> Update</button></td>
                    <td><button class="btn btn-danger" id="delete-${i}"><i class="fa-solid fa-trash-can"></i> Delete</button></td>
                </tr>`;
    }

    tBody.innerHTML = objs;

    for (let i = 0; i < allObjects.length; i++) {
        document.getElementById(`delete-${i}`).addEventListener('click', () => deleteObject(i));
        document.getElementById(`update-${i}`).addEventListener('click', () => updateObject(i));
    }
}

function deleteObject(index) {
    allObjects.splice(index, 1);

    localStorage.setItem('allObjects', JSON.stringify(allObjects));

    displayObjects();
}

function updateObject(index) {
    const obj = allObjects[index];
    siteName.value = obj.name;
    siteUrl.value = obj.url;       
    

    deleteObject(index);
}

function checkExist(name){
    for(let i=0; i<allObjects.length; i++){
        if(name == allObjects[i].name){
            return false;
        }
    }
    return true;
}