function getTrackerId(){
	const urlParams = new URLSearchParams(window.location.search)
	console.log(urlParams);
	let marker = urlParams.get("id")
	console.log(marker);
}