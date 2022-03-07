import { menuHandler, mobileIcon } from "../handlers/menu-handler.js";
import { requestData, dataJSON } from "../handlers/request-data.js";
import { changeSlider, changeSliderOnClick } from "../handlers/slider-handler.js";

window.addEventListener("DOMContentLoaded", requestData);
mobileIcon.addEventListener("click", menuHandler);

const terminology = document.querySelector(".technologyInfo__terminology");
const description = document.querySelector(".technologyInfo__description");
const image = document.querySelector(".technologyContainer__image");

const buttonsContainer = document.querySelector(".technologyButtons");
const buttons = [...document.querySelectorAll(".technologyButtons__button")];

buttonsContainer.addEventListener("click", (event) => {
	if (event.target.tagName === "BUTTON") {
		buttons.forEach((item) => {
			item.classList.remove("technologyButtons__button--active");
		});

		event.target.classList.add("technologyButtons__button--active");

		changeSliderOnClick(buttons);
	}

	changeSlider(image, null, terminology, description);
});
