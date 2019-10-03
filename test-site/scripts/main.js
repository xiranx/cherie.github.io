let myImage = document.querySelector('img');

myImage.onclick = function(){
    let mysrc = myImage.getAttribute('src');
    if(mysrc==='images/2.jpg'){
        myImage.setAttribute('src','images/5.jpg');
    }else{
        myImage.setAttribute('src','images/2.jpg');
    }
}

function setHeading(name){
    let myHeading = document.querySelector('h1');
    myHeading.textContent='tvxq'+name+'!';
}

function setUserName(){
    let myName = prompt('please enter your name');
    if(!myName||myName===null){
        setUserName();
    }else{
        localStorage.setItem('name',myName);
        setHeading(myName);
    }
    
}

let storedName = localStorage.getItem('name');
if(!storedName){
    setUserName();
}else{
    setHeading(storedName);
}

let myButton = document.querySelector('button');
myButton.onclick=function(){
    setUserName();
}
