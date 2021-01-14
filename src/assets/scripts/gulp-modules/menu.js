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

    if (menuCall.isOpened) {
        header.style.transform = 'translateX(0)';
        menuCall.textContent = menuCall.dataset.opened;

    } else {
        header.style.transform = 'translateX(-100%)';
        menuCall.textContent = menuCall.dataset.closed;

    }



});







function dqsA(selector) {
    return document.querySelectorAll(selector);
}
/**Мобильный перенос елементов END */