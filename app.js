/**
 * Created by ene on 24.07.2015.
 */

addEventListener('DOMContentLoaded', function(evt, detail, sender){

	var allDivs = document.querySelectorAll('div')
	for (i = 0; i != allDivs.length; i++) {
		allDivs[i].setAttribute('class', 'draggable')
	}

// if you have multiple .draggable elements
// get all draggie elements
	var draggableElems = document.querySelectorAll('.draggable');
// array of Draggabillies
	var draggies = []
// init Draggabillies
	for (var i = 0, len = draggableElems.length; i < len; i++) {
		var draggableElem = draggableElems[i];
		var draggie = new Draggabilly(draggableElem, {
			// options...
		});
		draggies.push(draggie);
	}

	console.log('>> drag-elements', draggableElems)

})