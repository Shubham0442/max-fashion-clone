// Header and Footer part starts here
import { navbar, footer } from '../components/headerFooter.js';

document.querySelector('#nav').innerHTML = navbar();
document.querySelector('#footer').innerHTML = footer();

window.onscroll = function () {
  myFunction();
}

var navbar2 = document.querySelector('#navbar2');
var sticky = navbar2.offsetTop;

function myFunction() {
  console.log(sticky);
  if (window.pageYOffset >= sticky) {
    console.log("x");
    navbar2.classList.add("sticky");
  } else {
    console.log("y");
    navbar2.classList.remove("sticky");
  }
}
$(".inputs").keyup(function () {
  if (this.value.length == this.maxLength) {
    $(this).next('.inputs').focus();
  }
});

let userName = JSON.parse(localStorage.getItem('userName'));
document.querySelector('#user').innerHTML = "Hello " + userName[0];

function landHome() {
  window.location.href = 'index.html';
}

document.querySelector('#mainLogo').addEventListener('click', landHome);

// Header and Footer part ends here


let basketData = JSON.parse(localStorage.getItem('basket'));
console.log(basketData);
if (basketData.length === 0) {
    document.querySelector('#basketCounter').style.visibility = "hidden";
} else {
    document.querySelector('#basketCounter').innerText = basketData.length;
    document.querySelector('#basketCounter').style.visibility = "visible";
}