'use strict';

{
    document.addEventListener("DOMContentLoaded", () => {
        let wrapper = document.getElementById('scroll__wrapper'),
            scroller = document.getElementById('scroller'),
            container = document.getElementById('scroll__container'),
            scrollbar = document.getElementById('scroller__bar'),
            scrollBarHeight;

        if (scroller) {
            let scrollWidth = scroller.offsetWidth - scroller.clientWidth;
            scrollWidth = scrollWidth < 17 ? 17 : scrollWidth;
            scroller.style.width = 'calc(100% + ' + scrollWidth +'px)';

            scroller.addEventListener('scroll', () => {
                if (scrollBarHeight > 8) {
                    scrollbar.style.top = 2 + scroller.scrollTop + 'px';
                } else {
                    scrollbar.style.top = 2 + scroller.scrollTop*((scroller.offsetHeight - 12)/(container.offsetHeight - scroller.offsetHeight)) + 'px'; //It's Math, yeah
                }
            });

            function calcBarHeight () {
                if (container.offsetHeight > scroller.offsetHeight) {
                    scrollBarHeight = scroller.offsetHeight - (container.offsetHeight - scroller.offsetHeight) - 4;
                    if (scrollBarHeight > 8) {
                        scrollbar.style.height = scrollBarHeight + 'px';
                    } else {
                        scrollbar.style.height = '8px';
                    }
                } else {
                    scrollbar.style.height = 0;
                }
            }

            wrapper.addEventListener('click', calcBarHeight);
            window.addEventListener('resize', calcBarHeight);

            calcBarHeight();
        }

    });
}
