/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const ul = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');
let currentActiveElem = document.querySelector('.active');

/*
 * End Global Variables
 * Start Helper Functions
 * 
*/

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNav() {
	for (let section of sections) {
		const currentSectionId = section.getAttribute('id');
		if(section.attributes['data-nav']){
			const currentSectionName = section.getAttribute('data-nav');
			let li = document.createElement('li');
			let navItemLink = document.createElement('a');
			navItemLink.textContent = currentSectionName;
			navItemLink.classList.add('menu__link');
			navItemLink.setAttribute('id', `${currentSectionId}__link`);
			navItemLink.setAttribute('href', `#${currentSectionId}`);
			if (section.classList.contains('your-active-class')) {
			navItemLink.classList.add('active');
			}
			li.setAttribute('class', 'navbar__item');
			li.onclick = function(e) {
			e.preventDefault();
			document.querySelector(`#${currentSectionId}`).scrollIntoView({
				behavior: 'smooth'
			});
		}

		li.appendChild(navItemLink);
		ul.appendChild(li);
			};
	};
}

// Add class 'active' to section when near top of viewport

function activeSection() {
    for (let item of sections) {
        const position = item.getBoundingClientRect();
        if (position.top <= 150 && position.bottom >= 150) {
            item.classList.add('your-active-class');
        } else {
            item.classList.remove('your-active-class');
    }; 
};
}
activeSection();

window.addEventListener("scroll", activeSection);


// Scroll to anchor ID using scrollTO event





/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

buildNav();

// Scroll to section on link click

// Set sections as active