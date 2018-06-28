var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');
btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

function handleDisplayImg(e) {
	console.dir(e);
	var thumbImgSrcValue = e.target.getAttribute('src');
	displayedImage.setAttribute('src', thumbImgSrcValue);
}
/* Looping through images */
  for (var i = 1; i <= 5; i++) {
	  var newImage = document.createElement('img');
	  newImage.setAttribute('src', `./images/pic${i}.jpg`);
	  thumbBar.appendChild(newImage);

/* Adding an onClick handler to each thumbnail image */	  
	  newImage.addEventListener('click', handleDisplayImg)
  }

/* Wiring up the Darken/Lighten button */
function handledColor() {
	var btnCurrentClass = this.getAttribute('class');
	if (btnCurrentClass === 'dark') {
		this.textContent = 'Lighten'
		this.setAttribute('class', 'light');
		overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
	} else {
		this.textContent = 'Darken'
		this.setAttribute('class', 'dark');
		overlay.style.backgroundColor = "rgba(0,0,0,0)";
	}
}
btn.addEventListener('click', handledColor)