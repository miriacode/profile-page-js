const userName = document.querySelector('.card-body > h1');
const user = [...document.querySelectorAll('.card-list-item')];
const numberConnectionRequests = document.querySelector('#connections-request-badge');
const numberYourConnections = document.querySelector('#your-connections-badge');


function changeName(){
    userName.textContent = "Miriam Acuña";
}

function removeUsers(i){
    user[i].remove();
    
}

function reduceNumber(){
    let num = parseInt(numberConnectionRequests.textContent);
    num-=1;
    numberConnectionRequests.textContent = num;
}

function increaseNumber(){
    let num = parseInt(numberYourConnections.textContent);
    num+=1;
    numberYourConnections.textContent = num;
}