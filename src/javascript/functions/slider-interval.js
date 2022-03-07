import { changeSlider, nextSlide, sliderPosition } from "../handlers/slider-handler.js";
import { sliderImage, sliderJob, sliderName, sliderParagraph } from "../pages-scripts/crew-page.js";

let interval;

export const sliderButtons = [...document.querySelectorAll(".sliderControllers__button")];

export function starInterval() {
	interval = setInterval(() => {
		sliderButtons[sliderPosition].classList.remove("sliderControllers__button--active");

		nextSlide(sliderButtons);
		changeSlider(sliderImage, sliderJob, sliderName, sliderParagraph);

		sliderButtons[sliderPosition].classList.add("sliderControllers__button--active");
	}, 5000);
}

export function stopInterval() {
	clearInterval(interval);
}
