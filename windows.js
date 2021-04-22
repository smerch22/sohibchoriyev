
let open_w = document.querySelectorAll('.description__photography');
let	open_window = document.querySelectorAll('.description__openWindow');

for (let i = 0; i < open_w.length; i++) {
	open_w[i].addEventListener('click', function () {
		for (let j = 0; j < open_window.length; j++) {
			open_window[j].classList.remove('active')
		}
		open_window[i].classList.toggle('active');	

	})
	
};


let slideIndex =1;
showSlides(slideIndex);

function plusText(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex =n);
}
function showSlides(n) {
	var i;
	var slides = document.getElementsByClassName('quote_text');

	if (n > slides.length) {
		slideIndex = 1
	} if (n < 1) {
		slideIndex = slides.length
	}
	for (i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}
	slides[slideIndex - 1].style.display = "block";
}