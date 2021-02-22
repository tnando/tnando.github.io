/**
 * @fileoverview
 * Provides the JavaScript interactions for all pages.
 *
 * @author 
 * Thomas Nandola
 */

/** namespace. */
var rhit = rhit || {};

/** globals */
rhit.variableName = "";

/** function and class syntax examples */
rhit.function = function () {


};

rhit.ClassName = class {
	constructor() {

	}

	methodName() {

	}
}

function toggleMenu(){
	var menuToggle = document.querySelector('.toggle');
	var menu = document.querySelector('.menu');
	menuToggle.classList.toggle('active');
	menu.classList.toggle('active');
	console.log("T");
}

/* Main */
/** function and class syntax examples */
rhit.main = function () {
	window.addEventListener('scroll', function(){
		var header = document.querySelector('header');
		header.classList.toggle('sticky', window.scrollY > 0);

	})		
};

rhit.main();
