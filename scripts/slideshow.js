var slideIndex = 1;
showSlides(slideIndex);
carousel();
function plusSlides(n) {
	showSlides(slideIndex += n);
}
function dispSlide(n) {
	showSlides(slideIndex = n);
}
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName("slide_image");
	var dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
}
function carousel() {
	var i;
	var slides = document.getElementsByClassName("slide_image");
	var dots = document.getElementsByClassName("dot");
	if (slideIndex > slides.length + 1) {slideIndex = 1}
	
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex-1].style.display = "block";
	dots[slideIndex-1].className += " active";
	
	slideIndex++;
	
	showSlides(slideIndex + 1);
	setTimeout(carousel, 5000);
}
