window.addEventListener("load", function(){

	var button = document.getElementById("button");

	button.addEventListener("click", function(){
	
		var background = document.getElementById("background");
	
		if(background.getAttribute("data-noiseBox") == "active"){
			background.setAttribute("data-noiseBox", "");
		}else{
			background.setAttribute("data-noiseBox", "active");
		}
	});
});