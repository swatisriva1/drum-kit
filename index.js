// var allButtons = document.querySelectorAll(".drum");
// for(i = 0; i < allButtons.length; i++) {
//     allButtons[i].addEventListener("click", handleClick);
// }
// function handleClick() {
//     var drumSound = new Audio("sounds/tom-1.mp3");
//     drumSound.play();
//     // alert("clicked");
// }

// on button click
var allButtons = document.querySelectorAll(".drum");
for(i = 0; i < allButtons.length; i++) {
    allButtons[i].addEventListener("click", function() {
        var keyButton = this.textContent;
        makeSound(keyButton);
        animateButton(keyButton);
    });
}

//on keyboard usage
document.addEventListener("keydown", function(event) {
    var keyPressed = event.key;
    makeSound(keyPressed);
    animateButton(keyPressed);
});


function makeSound(key) {       
    
    switch(key) {    
        case "w":
            key = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            key = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            key = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            key = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            key = new Audio("sounds/snare.mp3");
            break;
        case "k":
            key = new Audio("sounds/kick-bass.mp3");
            break;
        case "l":
            key = new Audio("sounds/crash.mp3");
            break;
    }
    key.play();
}

function animateButton(key) {
    activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
