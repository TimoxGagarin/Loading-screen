var loading_text_string = "Loading";
setInterval(load, 500);

function load(){
	var loading_text = document.getElementsByClassName('loading-container')[0].getElementsByClassName('loading-text')[0];
	
	if(!loading_text_string.endsWith("..."))
		loading_text_string += '.';
	else
		loading_text_string = "Loading";
	
	loading_text.innerHTML = loading_text_string;
}

function loadData(){
	return new Promise((resolve, reject) => {
		setTimeout(resolve, 15000);
	});
}

loadData().then(() => {
	var preloader = document.getElementsByClassName('loading-container')[0];
	preloader.classList.add('hidden');
	preloader.classList.remove('visible');
});