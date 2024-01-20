


function togglemenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open")
	icon.classList.toggle("open")
}

/* REMOVE SPLINE BADGE */

if (screen.width < 1200) {
	window.onload = function addCode() {
				document.getElementById("moving2")
					.innerHTML +=
						'<spline-viewer url="https://prod.spline.design/jnY4iVXV1tofOqTa/scene.splinecode"></spline-viewer>';
					}
}
else{
	window.onload = function addCode() {
				document.getElementById("moving1")
					.innerHTML +=
						'<spline-viewer url="https://prod.spline.design/tK12fHnNHmo46tvc/scene.splinecode"></spline-viewer>';
					}
}


	setTimeout(bruh, 4000)
	function bruh() {
        var shadowRoot = document.querySelector('spline-viewer').shadowRoot;
        shadowRoot.querySelector('#logo').remove();
	}


