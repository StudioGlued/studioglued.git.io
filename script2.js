


function togglemenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open")
	icon.classList.toggle("open")
}

/* REMOVE SPLINE BADGE */

window.onload = function() {
  var splineElement = document.querySelectorAll('spline-viewer');
  
  for (let pas = 0; pas < splineElement.length; pas++) {
    var shadowRoot = splineElement[pas].shadowRoot;
    shadowRoot.querySelector('#logo').remove();
  }
}

