import { dataJSON } from "./request-data.js";

export let sliderPosition = 0;

export function changeSliderOnClick(buttons) {
	sliderPosition = buttons.findIndex((element) => element === event.target);
}

export function changeSlider(image, job, title, paragraph) {
	if (typeof dataJSON[sliderPosition].image === "object") {
		image.src = dataJSON[sliderPosition].image.landscape;
	} else {
		image.src = dataJSON[sliderPosition].image;
	}

	title.textContent = dataJSON[sliderPosition].name;
	paragraph.textContent = dataJSON[sliderPosition].bio;

	if (job != null) job.textContent = dataJSON[sliderPosition].role;
}

export function nextSlide(buttons) {
	if (sliderPosition == buttons.length - 1) {
		sliderPosition = buttons.length - buttons.length - 1;
	}

	sliderPosition += 1;
}
