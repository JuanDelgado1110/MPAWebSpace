import { dataJSON } from "./request-data.js";
import { sliderButtons } from "../functions/slider-interval.js";

const sliderJob = document.querySelector(".sliderContainer__job");
const sliderName = document.querySelector(".sliderContainer__name");
const sliderParagraph = document.querySelector(".sliderContainer__paragraph");
const sliderImage = document.querySelector(".sliderImageContainer__img");

export let sliderPosition = 0;

export function changeSliderOnClick() {
	sliderPosition = sliderButtons.findIndex((element) => element === event.target);
}

export function changeSlider() {
	sliderImage.src = dataJSON[sliderPosition].image;
	sliderJob.textContent = dataJSON[sliderPosition].role;
	sliderName.textContent = dataJSON[sliderPosition].name;
	sliderParagraph.textContent = dataJSON[sliderPosition].bio;
}

export function nextSlide() {
	if (sliderPosition == sliderButtons.length - 1) {
		sliderPosition = sliderButtons.length - sliderButtons.length - 1;
	}

	sliderPosition += 1;
}
