'use strict';

{
    (function () {
        var checkbox = document.querySelector('.employer-form .form__action .mdl-checkbox__input'),
            button = document.querySelector('.employer-form .form__action .mdl-button');
        if (button && checkbox) {
            button.disabled = !checkbox.checked;

            checkbox.addEventListener('change', function () {
                button.disabled = !checkbox.checked;
            });
        }
    })();
}