import { menuHandler, mobileIcon } from "../handlers/menu-handler.js";
import { requestData, dataJSON } from "../handlers/request-data.js";

window.addEventListener("DOMContentLoaded", requestData);
mobileIcon.addEventListener("click", menuHandler);

const destinationImage = document.querySelector(".destinationPage__destinationImg");
const destinationTitle = document.querySelector(".destinationContainer__title");
const destinationParagraph = document.querySelector(".destinationContainer__paragraph");
const destinationDistance = document.querySelector(".destinationContainer__distance");
const destinationTimeTravel = document.querySelector(".destinationContainer__timeTravel");

const links = [...document.querySelectorAll(".destinationContainer__link")];
const linksContainer = document.querySelector(".destinationContainer__linksContainer");

linksContainer.addEventListener("click", (event) => {
	if (event.target.classList.contains("destinationContainer__link")) {
		links.forEach((item) => {
			item.classList.remove("destinationContainer__link--active");
		});

		event.target.classList.add("destinationContainer__link--active");

		dataJSON.forEach((item) => {
			if (event.target.textContent.toLocaleLowerCase() == item.name.toLocaleLowerCase()) {
				destinationImage.src = item.image;
				destinationTitle.textContent = item.name;
				destinationParagraph.textContent = item.description;
				destinationDistance.childNodes[2].textContent = item.distance;
				destinationTimeTravel.childNodes[2].textContent = item.travel;
			}
		});
	}
});
