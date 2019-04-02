{
    let ui_navigation = document.querySelectorAll('.sub-navigation');
    if (ui_navigation) {
        const length = ui_navigation.length;
        for (let i = 0; i < length; i++) {
            let nav = ui_navigation[i];
            nav.addEventListener('click', () => {
                nav.classList.toggle('sub-navigation--show');
                nav.querySelector('.mdl-navigation__link').classList.toggle('mdl-navigation__link--current');
            })
        }
    }
}