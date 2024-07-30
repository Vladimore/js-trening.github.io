let myH1 = document.querySelector("h1");
let myImage = document.querySelector("img");
let myButton = document.querySelector("button");

if(!localStorage.getItem("name")){
    setNamePerson();
}
else{
    myH1.textContent = "Hello, " + localStorage.getItem("name");
}

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/valorant1.jpg"){
        myImage.setAttribute("src","images/valorant2.jpg");
    }
    else{
        myImage.setAttribute("src", "images/valorant1.jpg");
    }
};

function setNamePerson(){
    let name = prompt("Enter your name:");
    localStorage.setItem("name", name);
    myH1.textContent = "Hello, " + name;
}

myButton.onclick = function(){
    setNamePerson();
}
