export const mobileIcon = document.querySelector(".navegationLinks__mobileIcon");
export const navegationLinks = document.querySelector(".navegationLinks__linksContainer");

export function menuHandler() {
	if (mobileIcon.src.includes("hamburger")) {
		mobileIcon.src = "/src/assets/images/icons/icon-close.svg";
		navegationLinks.classList.replace("navegationLinks__linksContainer--hidden", "navegationLinks__linksContainer--show");
	} else if (mobileIcon.src.includes("close")) {
		mobileIcon.src = "/src/assets/images/icons/icon-hamburger.svg";
		navegationLinks.classList.replace("navegationLinks__linksContainer--show", "navegationLinks__linksContainer--hidden");
	}
}
