function loadMarkers(){
	const urlParams = new URLSearchParams(window.location.search)
	let marker = urlParams.get("id")
	console.log(marker);
	console.log(urlParams.get("marker"));
	
	if( marker = "trex"){
		var element = document.getElementById("marker");
		const newDiv = document.createElement("a-gltf-model", { gltf-model: "trex/skyscraper.gltf",  scale : "5 5 5", position : "50 0 0" , rotation:"0 90 0"});
	}
	else{
		var element = document.getElementById(id);
		const newDiv = document.createElement("a-gltf-model", { gltf-model: "trex/scene.gltf",  scale : "5 5 5", position : "50 0 0" , rotation:"0 90 0"});
	
	}
		
	
}

