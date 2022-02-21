import { menuHandler, mobileIcon } from "../handlers/menu-handler.js";

mobileIcon.addEventListener("click", menuHandler);

const destinationImage = document.querySelector(".destinationPage__destinationImg");
const destinationTitle = document.querySelector(".infoContainer__title");
const destinationParagraph = document.querySelector(".infoContainer__paragraph");
const destinationDistance = document.querySelector(".infoContainer__distance");
const destinationTimeTravel = document.querySelector(".infoContainer__timeTravel");

const links = [...document.querySelectorAll(".infoContainer__link")];
const linksContainer = document.querySelector(".infoContainer__linksContainer");

let dataJSON;

function requestData() {
	fetch("/src/data.json")
		.then((response) => response.json())
		.then((objectData) => (dataJSON = objectData.destinations));
}

window.addEventListener("DOMContentLoaded", requestData);

linksContainer.addEventListener("click", (event) => {
	if (event.target.classList.contains("infoContainer__link")) {
		links.forEach((item) => {
			item.classList.remove("infoContainer__link--active");
		});

		event.target.classList.add("infoContainer__link--active");

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
