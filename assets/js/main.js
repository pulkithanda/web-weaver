// Show Menu on Mobile
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId)
	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show-menu')
		})
	}
}
showMenu('nav-toggle', 'nav-menu')

// Remove Mobile Menu
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
	const navMenu = document.getElementById('nav-menu')
	navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Change Background header
function scrollHeader() {
	const nav = document.getElementById('header')
	if (this.scrollY >= 80) nav.classList.add('scroll-header');
	else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

// Show Scroll Up button
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

// Donations Page JS
let donations = 0;
let selected = false;
let selId = 0;
function setValue(element) {
	let val = element;
	if (!selected) {
		val.style.background = "#3671f0";
		val.style.color = "#fff";
		selId = val;
		selected = true;
	} else {
		selId.style.background = "#3671f0";
		val.style.background = "#3671f0";
		val.style.color = "#fff";
		selId = val;
	}
}

