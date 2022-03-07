import { requestData } from "../handlers/request-data.js";
import { menuHandler, mobileIcon } from "../handlers/menu-handler.js";
import { changeSlider, changeSliderOnClick } from "../handlers/slider-handler.js";
import { starInterval, stopInterval, sliderButtons } from "../functions/slider-interval.js";

window.addEventListener("DOMContentLoaded", requestData);
window.addEventListener("load", () => {
	starInterval();
});

mobileIcon.addEventListener("click", menuHandler);

const sliderControllers = document.querySelector(".sliderControllers");

export const sliderJob = document.querySelector(".sliderContainer__job");
export const sliderName = document.querySelector(".sliderContainer__name");
export const sliderParagraph = document.querySelector(".sliderContainer__paragraph");
export const sliderImage = document.querySelector(".sliderImageContainer__img");

sliderControllers.addEventListener("click", (event) => {
	stopInterval();

	if (event.target.className === "sliderControllers__button") {
		if (event.target.classList.contains("sliderControllers__button")) {
			sliderButtons.forEach((item) => {
				item.classList.remove("sliderControllers__button--active");
			});

			event.target.classList.add("sliderControllers__button--active");
		}

		changeSliderOnClick(sliderButtons);
	}

	changeSlider(sliderImage, sliderJob, sliderName, sliderParagraph);
	starInterval();
});
