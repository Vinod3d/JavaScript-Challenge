// Navbar Toggle Function
const toggleNav = function() {
    const nav = document.getElementById('main-nav');
    const hamburger = document.querySelector('.hamburger');
    
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
};

// Navbar Scroll Effect Function
const scrollEffect = function() {
    window.addEventListener('scroll', function() {
        const header = document.getElementById('main-header');
        const scrollPosition = window.scrollY;

        // Add scrolled class to header when scroll position is greater than 300px
        if (scrollPosition > 300) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
};
scrollEffect();





// SLIDER
const myslide = document.querySelectorAll('.myslide');
let counter = 1;
slidefun(counter);

let timer = setInterval(autoSlide, 8000);
function autoSlide() {
	counter += 1;
	slidefun(counter);
}
function changeSlides(n) {
	counter += n;
	slidefun(counter);
}


function slidefun(n) {
	
	let i;
	for(i = 0;i<myslide.length;i++){
		myslide[i].style.display = "none";
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
}


// TAB SLIDER
const tabSlides = document.querySelectorAll('.tabSlide');
let countNum = 1;
showTabSlide(countNum);

function nextSlides(n) {
	countNum += n;
	showTabSlide(countNum);
}


function showTabSlide(n){
	for(let i = 0;i<tabSlides.length;i++){
		tabSlides[i].classList.remove("active");
	}
	if(n > tabSlides.length){
	   countNum = 1;
	   }
	if(n < 1){
	   countNum = tabSlides.length;
	}
	tabSlides[countNum - 1].classList.add("active");
}


// Testimonial
const slides= document.querySelectorAll('.testimonial-slide');
let count = 1;
slidetest(count);


function plusSlides(n) {
	count += n;
	slidetest(count);
}


function slidetest(n) {
	for(let i = 0;i<slides.length;i++){
		slides[i].classList.remove("active");
	}
	if(n > slides.length){
	   count = 1;
	   }
	if(n < 1){
	   count = slides.length;
	}
	slides[count - 1].classList.add("active");
}


//Tab

function openTab(evt, tabName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].classList.remove("active");
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].classList.remove("active");
	}
	// document.getElementById(tabName).style.display = "block";
	document.getElementById(tabName).classList.add("active");
	evt.currentTarget.classList.add("active");
}


// ACCORDION

var acc = document.getElementsByClassName("accordion");


for (var i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}