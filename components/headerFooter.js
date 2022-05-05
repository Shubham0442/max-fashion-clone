window.onscroll = function() {
    myFunction();
}

var navbar = document.querySelector('#navbar2');
var sticky = navbar.offsetTop;

function myFunction() {
    console.log(sticky);
    if(window.pageYOffset >= sticky) {
        console.log("x");
        navbar.classList.add("sticky");
    } else {
        console.log("y");
        navbar.classList.remove("sticky");
    }
}