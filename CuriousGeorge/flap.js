var myButton = document.querySelector("input[type=button]");
myButton.onclick = flipFlap;

function flipFlap(event) {
  var myEl = document.querySelector("#flapContainer");
  if(myEl.style.transform === "none")
    myEl.style.transform = "rotateY(180deg)";
  else
    myEl.style.transform = "none";
}
