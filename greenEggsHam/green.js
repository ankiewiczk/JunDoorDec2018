var myButton = document.getElementById("myButton");
myButton.addEventListener("click", flipPanel);

function flipPanel(evt) {
    var myEl = document.querySelector("#flapContainer");
    if(myEl.style.transform ==="none")
        myEl.style.transform = "rotateY(180deg)";
    else 
        myEl.style.transform = "none";
}