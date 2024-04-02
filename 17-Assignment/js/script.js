// NAVBAR
function toggleNav() {
    const nav = document.getElementById('main-nav');
    const hamburger = document.querySelector('.hamburger');
    
    nav.classList.toggle('active');
    hamburger.classList.toggle('active');
}




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
function currentSlide(n) {
	counter = n;
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



// Testimonial
const slides= document.querySelectorAll('.testimonial-slide');
let count = 1;
slidetest(count);


function plusSlides(n) {
	count += n;
	slidetest(count);
}
function currentSlide(n) {
	count = n;
	slidetest(count);
}


function slidetest(n) {
	
	let i;
	for(i = 0;i<slides.length;i++){
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