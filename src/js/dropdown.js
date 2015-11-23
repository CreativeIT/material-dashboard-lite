'use strict'

window.onload = function () {
    var dropdowns = document.getElementsByClassName("creative-dropdown");
    
    for (var i = 0; i < dropdowns.length; ++i) {
	addEventListeners(dropdowns[i]);
    }
}
    
function addEventListeners(el) {
    var children = el.childNodes;
    var dropdown;
    
    dropdown = fetchDropdown(children);
    
    if (dropdown == undefined)
	return;
    
    dropdown.onfocus = function() {
	this.toggle.checked = true;
	this.icon.style.color = "rgb(63, 81, 181)";
    }
    
    dropdown.onblur = function() {
	this.toggle.checked = false;
	this.icon.style.color = "gray";
    }
    
    var ul = findUlElement(children);
    
    if (ul != undefined) {
	addSelectEventsForDropLi(ul, dropdown);
    }
}

function addSelectEventsForDropLi(ul, dropdown) {
    var j;
    for (j = 0; j < ul.childNodes.length; ++j) {
	  
	if (ul.childNodes[j].tagName === "LI") {
	    ul.childNodes[j].inputEl = dropdown;

	    ul.childNodes[j].onclick = function () {
		this.inputEl.value = this.textContent;
	    }
	}
    }
}

function findUlElement(children) {
    var ul;
    var i;
    for (i = 0; i < children.length; ++i) {
	    
	    if (children[i].tagName === "DIV") {
	      
		for (j = 0; j < children[i].childNodes.length; ++j) {
		  
		    if (children[i].childNodes[j].tagName === "UL") {
			ul = children[i].childNodes[j];
			break;
		    }
		}
	    }
	    
	    if (children[i].tagName === "UL")
		ul = children[i];
	}

    return ul;
}

function fetchDropdown(children) {
    var dropdown;
    var i, j;
    var toggle, 
	icon;
    for (i = 0; i < children.length; ++i) {
      
	if (children[i].tagName === "INPUT") {
	    dropdown = children[i];
	}

	if (children[i].tagName === "LABEL" && (' ' + children[i].className + ' ').indexOf(' ' + 'mdl-icon-toggle' + ' ') > -1) {
	  
	    for (j = 0; j < children[i].childNodes.length; ++j) {
	      
		if (children[i].childNodes[j].tagName === "INPUT")
		    toggle = children[i].childNodes[j];
		
		if (children[i].childNodes[j].tagName === "I")
		    icon = children[i].childNodes[j];
	    }
	}
    }
    dropdown.toggle = toggle;
    dropdown.icon = icon;
    return dropdown;
}