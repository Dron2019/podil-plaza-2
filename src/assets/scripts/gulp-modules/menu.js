/**
 * 
 * std function
 * 
 */



const throttle = (func, limit) => {
    let inThrottle
    return function() {
        const args = arguments
        const context = this
        if (!inThrottle) {
            func.apply(context, args)
            inThrottle = true
            setTimeout(() => inThrottle = false, limit)
        }
    }
}

function showHeadMouseHandle(evt) {

    header.classList.add('headroom--pinned');
    header.classList.remove('headroom--unpinned');

}







// .js-mobile-call-menu



let header = document.querySelector('aside');
let menuCall = document.querySelector(".js-mobile-call-menu");

let isOpened = false;
menuCall.addEventListener('click', function(evt) {
    menuCall.isOpened = !menuCall.isOpened;
    menuCall.isOpened ? openMenu(header, menuCall) : closeMenu(header, menuCall);
});

function openMenu(menu, callBut) {
    menu.style.transform = 'translateX(0)';
    callBut.textContent = callBut.dataset.opened;
}

function closeMenu(menu, callBut) {
    menu.style.transform = 'translateX(-100%)';
    callBut.textContent = callBut.dataset.closed;
}


header.querySelectorAll('ul a, a[href*="#"]').forEach(link => {
    link.addEventListener('click', function(evt) {
        evt.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: "smooth" });
        if (document.documentElement.clientWidth < 576) closeMenu(header, menuCall);

    });
})
header.querySelectorAll('.js-form-call').forEach(link => {
    link.addEventListener('click', function(evt) {
        evt.preventDefault();
        if (document.documentElement.clientWidth < 576) closeMenu(header, menuCall);

    });
})






function dqsA(selector) {
    return document.querySelectorAll(selector);
}
/**Мобильный перенос елементов END */