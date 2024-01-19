function togglemenu() {
	const menu = document.querySelector(".menu-links");
	const icon = document.querySelector(".hamburger-icon");
	menu.classList.toggle("open")
	icon.classList.toggle("open")
}

/* REMOVE SPLINE BADGE */

window.onload = function() {
        var shadowRoot = document.querySelector('spline-viewer').shadowRoot;
        shadowRoot.querySelector('#logo').remove();
    }
