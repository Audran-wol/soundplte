

var numberOfDrumButtons = document.querySelectorAll(".sound").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".sound")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
    

  });

}

document.addEventListener("keypress", function(event) {

  makeSound(event.key);

  buttonAnimation(event.key);



});


function makeSound(key) {

  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/croosh.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/deepcuts.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/jio.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/letme.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/speedwalkinf.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/who.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/xx.mp3');
      kick.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

 function makeRandomColor(){
   const r = Math.floor(Math.random() * 255);
   const g = Math.floor(Math.random() * 255);
   const b = Math.floor(Math.random() * 255);
   return `rgb(${r}, ${g}, ${b})`;
 }

document.querySelector('#randy').addEventListener('click');
const newColor = makeRandomColor();
document.body.style.backgroundColor = newColor;
