var count = 350;
window.onkeydown = function () {
  console.log(event.keyCode);
  var character = document.getElementById("character");
  if (event.keyCode === 39) {
    character.src = "animation/action1.gif";
    count = count + 50;
    console.log(count);
    character.style.left = count + "px";
    setTimeout(function () {
      character.src = "animation/action.gif";
    }, 100);
  }
  if (event.keyCode === 37) {
    character.src = "animation/action1.gif";
    count = count - 50;
    console.log(count);
    character.style.left = count + "px";
    setTimeout(function () {
      character.src = "animation/action.gif";
    }, 100);
  }
  if (event.keyCode === 38) {
    character.src = "animation/bala2.gif";
    setTimeout(function () {
      character.src = "animation/action.gif";
    }, 1000);
  }
};
var count1 = 350;
window.onkeydown = function () {
  console.log(event.keyCode);
  var character2 = document.getElementById("character2");
  if (event.keyCode === 76) {
    character2.src = "animation/action3.gif";
    count1 = count1 + 50;
    console.log(count1);
    character2.style.left = count1 + "px";
    setTimeout(function () {
      character2.src = "animation/four.gif";
    }, 100);
  }
  if (event.keyCode === 82) {
    character2.src = "animation/action3.gif";
    count1 = count1 - 50;
    console.log(count1);
    character2.style.left = count1 + "px";
    setTimeout(function () {
      character2.src = "animation/four.gif";
    }, 100);
  }
  if (event.keyCode === 70) {
    character2.src = "animation/bala2.gif";
    setTimeout(function () {
      character2.src = "animation/four.gif";
    }, 1000);
  }
};

// window.onkeyup = function (){
//     console.log(event.keyCode);
// }
