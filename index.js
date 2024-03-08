// Selector For Targeting Each Button
let buttons = document.querySelectorAll(".drum");
let audio;
let keybutton = Array.from(buttons).map((button) => {
  return button.innerHTML;
});

// Give Event To The Button
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let btnInnerHTML = this.innerHTML;
    makeAnimation(this);
    makeSound(btnInnerHTML);
  });
}

document.addEventListener("keydown", function (e) {
  let keyPressed = e.key.toLowerCase();
  if (keybutton.includes(keyPressed)) {
    makeAnimation(document.querySelector(`.${keyPressed}`));
  }
  makeSound(keyPressed);
});

// Function For Sound
function makeSound(key) {
  switch (key) {
    case "w":
      audio = new Audio("./sounds/tom-1.mp3");
      break;
    case "a":
      audio = new Audio("./sounds/tom-2.mp3");
      break;
    case "s":
      audio = new Audio("./sounds/tom-3.mp3");
      break;
    case "d":
      audio = new Audio("./sounds/tom-4.mp3");
      break;
    case "j":
      audio = new Audio("./sounds/snare.mp3");
      break;
    case "k":
      audio = new Audio("./sounds/crash.mp3");
      break;
    case "l":
      audio = new Audio("./sounds/kick-bass.mp3");
      break;
  }
  audio.play();
}

// Function For Animation
function makeAnimation(button) {
  if (keybutton.includes(button.innerHTML)) {
    buttons.forEach((btn) => {
      btn.style.color = "#da0463";
      btn.style.transform = "scale(1)";
    });

    button.style.color = "white";
    button.style.transform = "scale(.8)";
  }
}
