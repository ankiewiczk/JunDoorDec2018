window.addEventListener("load",loadDocument);

function loadDocument(evt) {
    //register event listeners to buttons here.  
    //Here is an example: 
    //  first grab the element you want to attach a listener
    var corduroyPanels  = document.querySelectorAll("#corduroy div");
    //  register it using addEventListener
   
   corduroyPanels.forEach(function(elem) {
    elem.addEventListener("click", corduroyFlip);
});
    
}

//write your event listener definitions here
function corduroyFlip(evt) {
    var cordPanel = document.querySelector("#corduroy .flapContainer");

    if(cordPanel.style.transform ==="none") {
        cordPanel.style.transform = "rotateY(180deg)";
        cordPanel.zIndex = 1;
    } else  {
        cordPanel.style.transform = "none";
        cordPanel.style.zIndex = 0;
    }
    
    evt.stopPropagation();
}

