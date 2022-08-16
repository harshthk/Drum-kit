// button press

var buttonRange = document.querySelectorAll(".drum").length;


// here in for loop make sure that you should don't use <= otherwise it will not give you sound output while pressing key.
for(var i=0; i<buttonRange; i++){
   
    document.querySelectorAll(".drum")[i].addEventListener("click",function() { 

        var buttonclick = this.innerHTML;
        clickSound(buttonclick);   
        animation(buttonclick);
    
    });
}

    // key press

 document.addEventListener("keypress", function(event) {
    clickSound(event.key);
      
    animation(event.key);
      
});

function clickSound(key){

    switch (key){
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
       case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "l":
             var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        default: console.log(key);
    }
}

function animation(currentkey){
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove('pressed');
    }, 100);
}

