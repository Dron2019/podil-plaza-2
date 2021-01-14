function addText(text, el) {
    el.innerText = text;
};

function changeElPosition(el, cords) {
    let selfHeight = +getComputedStyle(el).height.replace(/px/, '');
    el.style.transform = `translateX(-50%)`;
    el.style.opacity = 1;
    el.style.pointerEvents = 'auto';
    // console.log(cords);
    el.style.visibility = 'visible';
    el.style.top = cords.top - (selfHeight * 1.25) + 'px';
    el.style.left = cords.left + (cords.width / 2) + 'px';
}

function offIcon(el) {
    el.style.opacity = 0;
    el.style.visibility = 'hidden';
    el.style.pointerEvents = 'none';
}


let hearts = document.querySelectorAll('.panorama-marker');
let popupIcon = document.querySelector('.js-panorama-help-popup');
// console.log(hearts);
hearts.forEach(icon => {
    icon.addEventListener('mouseenter', (evt) => {
        evt.stopPropagation();
        changeElPosition(popupIcon, icon.getBoundingClientRect());
        addText(icon.querySelector('title').textContent, popupIcon)
    });
    icon.addEventListener('mouseout', (evt) => {
        evt.stopPropagation();
        offIcon(popupIcon);
    });
})


/**Выравнивание картинки бекграунда под высоту текста */

const podilAbout = document.querySelector('.podil-about');
alignBgUnderText(podilAbout);
window.addEventListener('resize', function(evt) {
    alignBgUnderText(podilAbout);

});

function alignBgUnderText(parent) {
    let img = parent.querySelector('img[class*="__bg"]');
    let text = parent.querySelector('[class*="__content"]');
    console.log(img, text);
    img.style.marginTop = text.getBoundingClientRect().height * -1 + 'px';
}



/**Слайдер планировок */
let planSLider = $('.js-plans').slick({
    slide: '.plan-card',
    slidesToShow: 3.9,
    infinite: false,
    prevArrow: '.js-plans-prev',
    nextArrow: '.js-plans-next',
    responsive: [{
            breakpoint: 1360,
            settings: {
                slidesToShow: 2.9,
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2.4,
            }
        },
    ]

})