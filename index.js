const testimonials = ["one", "two", "three", "four", "five"];
let currentTestimonial = 0;
let timer;

function DisplayTestimonial() {
	const sliderContainer = document.querySelector(".slider-container");
	const testimonialDiv = document.createElement("div");

	testimonialDiv.textContent = testimonials[currentTestimonial];

	testimonialDiv.classList.add("testimonial");
	testimonialDiv.classList.add("active");

	sliderContainer.appendChild(testimonialDiv);
}

function NextTestimonial() {
	currentTestimonial < testimonials.length - 1
		? currentTestimonial++
		: (currentTestimonial = 0);

	UpdateDisplay();
}

function PrevTestimonial() {
	currentTestimonial > 0
		? currentTestimonial--
		: (currentTestimonial = testimonials.length - 1);

	UpdateDisplay();
}

function UpdateDisplay() {
	while (document.querySelector(".slider-container").firstChild) {
		document
			.querySelector(".slider-container")
			.removeChild(
				document.querySelector(".slider-container").firstChild
			);
	}

	while (document.querySelector(".slider-dots-container").firstChild) {
		document
			.querySelector(".slider-dots-container")
			.removeChild(
				document.querySelector(".slider-dots-container").firstChild
			);
	}

	DisplayTestimonial();
	CreateSliderDots();
	let activeDot = document.getElementById(currentTestimonial);
	activeDot.classList.add("slider-dot-active");
	clearTimeout(timer);
	timer = setTimeout(() => NextTestimonial(), 5000);
}

function SliderDotClicked(index) {
	currentTestimonial = index;
	UpdateDisplay();
}

function CreateSliderDots() {
	const sliderDotsContainer = document.querySelector(
		".slider-dots-container"
	);

	for (const i of testimonials) {
		const sliderDotDiv = document.createElement("div");

		sliderDotDiv.classList.add("slider-dot");
		sliderDotDiv.id = testimonials.indexOf(i);
		sliderDotDiv.addEventListener("click", () => {
			SliderDotClicked(testimonials.indexOf(i));
		});
		sliderDotsContainer.appendChild(sliderDotDiv);
	}
}

UpdateDisplay();
