function loadMarkers(){
	const urlParams = new URLSearchParams(window.location.search)
	let trakingId = urlParams.get("id")
	let markerId = urlParams.get("marker")
	console.log(trakingId);
	console.log(markerId);
	
	if( trakingId = "trex"){
		
		const newDiv = document.createElement("a-gltf-model", { "gltf-model": "trex/skyscraper.gltf",  "scale" : "5 5 5", "position" : "50 0 0" , "rotation":"0 90 0"});
		var element = document.getElementById("marker");
		element.appendChild(newDiv);
	}
	else{
		var element = document.getElementById(id);
		
	}
		
	
}

