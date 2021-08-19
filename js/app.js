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

// build the nav fucntion
function buildNav() {
	for (let section of sections) {
		const currentSectionId = section.getAttribute('id');
		if(section.attributes['data-nav']){
			const currentSectionName = section.getAttribute('data-nav');
			let li = document.createElement('li'); //add list item
			let navItemLink = document.createElement('a'); //add link to each item
			navItemLink.textContent = currentSectionName; //set name of item
			li.classList.add('menu__link'); //set class menu link for item
			li.setAttribute('id', `${currentSectionId}__link`); //assign section for item to match with corresponding section
			navItemLink.setAttribute('href', `#${currentSectionId}`); //add hyperlink
			if (section.classList.contains('your-active-class')) { //if section is active, set class of nav bar item to active
			li.classList.add('active');
			}
			li.onclick = function(e) { //function to scroll to the section when clicked
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
        const link = document.querySelector(`#${item.id}__link`);
        if (position.top <= 150 && position.bottom >= 150) { //set the area in view zone as active
            item.classList.add('your-active-class');
            link.classList.add('active');
        } else { //set other sections which are not in view zone to inactive
            item.classList.remove('your-active-class');
            link.classList.remove('active');
    }; 
};
}
window.addEventListener("scroll", activeSection);//listen for scroll to choose active session


// Scroll to anchor ID using scrollTO event





/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

buildNav();

// Scroll to section on link click
activeSection();

// Set sections as active