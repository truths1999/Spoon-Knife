
let outputDiv = document.getElementById("output");
outputDiv.textContent = "Adjustment has been made"
outputDiv.style.color = "pink";

let button = document.getElementById("changeBtn");
let message = document.getElementById("message");

button.addEventListener("click", function(){
    message.textContent = "The text has been changed."
    message.style.color = "red";
})

let buttonRed = document.getElementById("rBackground");
let buttonBlue = document.getElementById("bBackground"); 

buttonRed.addEventListener("click", function(){
    document.body.style.backgroundColor = "red";
})

buttonBlue.addEventListener("click", function(){
    document.body.style.backgroundColor = "blue";
})

