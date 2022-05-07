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

document.querySelector('.prev').addEventListener('click', function() {plusSlides(1)});
document.querySelector('.next').addEventListener('click', function() {plusSlides(-1)});
document.querySelector('#slide1').addEventListener('click', function() {currentSlide(1)});
document.querySelector('#slide2').addEventListener('click', function() {currentSlide(2)});
document.querySelector('#slide3').addEventListener('click', function() {currentSlide(3)});

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000);
}

let slideIndexM = 1;
showSlidesM(slideIndexM);

function plusSlides(n) {
  showSlidesM(slideIndexM += n);
}

function currentSlide(n) {
  showSlidesM(slideIndexM = n);
}

function showSlidesM(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndexM = 1}    
  if (n < 1) {slideIndexM = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexM-1].style.display = "block";  
  dots[slideIndexM-1].className += " active";
}