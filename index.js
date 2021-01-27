
for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click",run);
document.querySelectorAll(".drum")[i].style.backgroundImage = "url(images/"+[i+1]+".png";
}
function run()
{

    var char = this.innerHTML;
    buttonAnimation(char);
    switch(char)
    {
        case "w":
            var sound = new Audio("sounds/tom-1.mp3"); 
            sound.play();   
            
           break; 

        case "a":
            var sound = new Audio("sounds/tom-2.mp3"); 
            sound.play();
break;
        case "s":
            var sound = new Audio("sounds/tom-3.mp3"); 
            sound.play();
break;
        case "d":
            var sound = new Audio("sounds/tom-4.mp3"); 
            sound.play();
break;
        case "j":
            var sound = new Audio("sounds/tom-5.mp3"); 
            sound.play();
break;
        case "k":
            var sound = new Audio("sounds/tom-6.mp3"); 
            sound.play();
break;
        case "l":
            var sound = new Audio("sounds/tom-7.mp3"); 
            sound.play();
break;
        
default: alert("npne");

    }
}

document.addEventListener("keydown",
function(event){
    buttonAnimation(event.key);
    makesound(event.key);
});

function makesound(key)
{
    switch(key)
    {
        case "w":
            var sound = new Audio("sounds/tom-1.mp3"); 
            sound.play();
           break; 

        case "a":
            var sound = new Audio("sounds/tom-2.mp3"); 
            sound.play();
break;
        case "s":
            var sound = new Audio("sounds/tom-3.mp3"); 
            sound.play();
break;
        case "d":
            var sound = new Audio("sounds/tom-4.mp3"); 
            sound.play();
break;
        case "j":
            var sound = new Audio("sounds/tom-5.mp3"); 
            sound.play();
break;
        case "k":
            var sound = new Audio("sounds/tom-6.mp3"); 
            sound.play();
break;
        case "l":
            var sound = new Audio("sounds/tom-7.mp3"); 
            sound.play();
break;
        
default: alert("none");
}
}

function buttonAnimation(keychar)
{
    document.querySelector("."+keychar).classList.add("coloreff");
    setTimeout(function(){
        document.querySelector("."+keychar).classList.remove("coloreff");
    },200);
}