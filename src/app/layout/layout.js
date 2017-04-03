{
    let ui_navigation = document.querySelectorAll('.sub-navigation');
    if (ui_navigation) {
        ui_navigation.forEach((nav) => {
            nav.addEventListener('click', () => {
                nav.classList.toggle('sub-navigation--show');
                nav.querySelector('.mdl-navigation__link').classList.toggle('mdl-navigation__link--current');
            })
        });
    }
}