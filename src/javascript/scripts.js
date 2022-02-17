const mobileIconMenu = document.querySelector(".navegationLinks__mobileIcon");
const navegationLinks = document.querySelector(".navegationLinks__linksContainer");

mobileIconMenu.addEventListener("click", () => {
	if (mobileIconMenu.src.includes("hamburger")) {
		mobileIconMenu.src = "./src/assets/images/icons/icon-close.svg";
		navegationLinks.classList.replace("navegationLinks__linksContainer--hidden", "navegationLinks__linksContainer--show");
	} else if (mobileIconMenu.src.includes("close")) {
		mobileIconMenu.src = "./src/assets/images/icons/icon-hamburger.svg";
		navegationLinks.classList.replace("navegationLinks__linksContainer--show", "navegationLinks__linksContainer--hidden");
	}
});
