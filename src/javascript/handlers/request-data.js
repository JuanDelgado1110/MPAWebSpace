export let dataJSON;

export function requestData() {
	fetch("/src/data.json")
		.then((response) => response.json())
		.then((objectData) => {
			if (document.location.href.includes("destination")) dataJSON = objectData.destinations;
			else if (document.location.href.includes("crew")) dataJSON = objectData.crew;
			else dataJSON = objectData.technology;

			// FIXME
			console.log(dataJSON);
		})
		.catch((error) => console.log(error));
}
