{
    let confirmBlock = document.querySelectorAll(".employer-form__confirm-submit");

    for (let i = 0; i < confirmBlock.length; ++i) {
	let checkbox = confirmBlock[i].querySelector("input"),
	    button = confirmBlock[i].querySelector("button");
	button.disabled = !checkbox.checked;

	checkbox.addEventListener('change', () => {
	    button.disabled = !checkbox.checked;
	});
    }
}