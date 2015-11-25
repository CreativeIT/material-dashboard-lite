'use strict'

window.onload =  () => {
    let dropdowns = document.getElementsByClassName("creative-dropdown");
    
    dropdowns = {
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    return {
      next() {
        [pre, cur] = [cur, pre + cur];
        return { done: false, value: cur }
      }
    }
  }
}
    
    for (let i of dropdowns) {
	addEventListeners(i);
    }
}
    
function addEventListeners(el) {
    let children = el.childNodes;
    let dropdown;
    
    dropdown = fetchDropdown(children);
    
    if (dropdown == undefined)
	return;
    
    dropdown.onfocus = () => {
	this.toggle.checked = true;
	this.icon.style.color = "rgb(63, 81, 181)";
    }
    
    dropdown.onblur = () => {
	this.toggle.checked = false;
	this.icon.style.color = "gray";
    }
    
    let ul = findUlElement(children);
    
    if (ul != undefined) {
	addSelectEventsForDropLi(ul, dropdown);
    }
}

function addSelectEventsForDropLi(ul, dropdown) {
  
    for (let j of ul.childNodes) {
	  
	if (j.tagName === "LI") {
	    j.inputEl = dropdown;

	    j.onclick = () => {
		this.inputEl.value = this.textContent;
	    }
	}
    }
}

function findUlElement(children) {
    let ul;
    for (let i of children) {
	    
	    if (i.tagName === "DIV") {
	      
		for (let j of i) {
		  
		    if (j.tagName === "UL") {
			ul = j;
			break;
		    }
		}
	    }
	    
	    if (i.tagName === "UL")
		ul = i;
	}

    return ul;
}

function fetchDropdown(children) {
    let dropdown;
    let toggle, 
	icon;
    children = {
	[Symbol.iterator]() {
	let pre = 0, cur = 1;
	    return {
		next() {
		    [pre, cur] = [cur, pre + cur];
		    return { done: false, value: cur }
		}
	    }
	}
    }
    for (let i of children) {
      
	if (i.tagName === "INPUT") {
	    dropdown = i;
	}

	if (i.tagName === "LABEL" && (` ${i.className} `).indexOf(` mdl-icon-toggle `) > -1) {
	  
	    for (let j of i.childNodes) {
	      
		if (j.tagName === "INPUT")
		    toggle = j;
		
		if (j.tagName === "I")
		    icon = j;
	    }
	}
    }
    dropdown.toggle = toggle;
    dropdown.icon = icon;
    return dropdown;
}