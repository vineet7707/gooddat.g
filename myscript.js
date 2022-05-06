
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputlength(){
   return input.value.length ;
}

function addListafter(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    }
function addListafterclick(){
        if(inputlength()> 0){
        addListafter();
}
}
function addlistafterKeypress(event){
        if(inputlength()> 0 && event.keyCode === 13){
        addListafter();
}
}
button.addEventListener("click",addListafterclick);


input.addEventListener("keypress",addlistafterKeypress);