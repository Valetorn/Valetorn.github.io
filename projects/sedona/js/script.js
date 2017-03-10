var link = document.querySelector(".hotel__search");
var popup = document.querySelector(".hotel__form");

link.addEventListener("click", function(event) {
	event.preventDefault();
	
	if(popup.classList.contains("hotel__form--show")) {
		popup.classList.remove("hotel__form--show");
	} else {
		popup.classList.add("hotel__form--show");
	}
});