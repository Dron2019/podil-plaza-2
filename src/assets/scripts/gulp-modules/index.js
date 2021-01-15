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
    // if (document.documentElement.clientWidth < 576) return;
    let img = parent.querySelector('img[class*="__bg"]');
    let text = parent.querySelector('[class*="__content"]');
    console.log(img, text);
    img.style.marginTop = text.getBoundingClientRect().height * -1 + 'px';
}


$('.js-plans').on('init', () => {
        let planCards = document.querySelectorAll('.plan-card');
        let planCardHeight = Array.from(planCards).map(el => el.getBoundingClientRect().height);
        planCards.forEach(card => {
            card.style.height = Math.max.apply(null, planCardHeight) + 'px';
        })
        console.log(planCardHeight);

    })
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
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
            }
        },
    ]

})






let lazyImages = document.querySelectorAll('img[data-src]');
var options = {
    rootMargin: '0px',
    threshold: 0.1
}
lazyImages.forEach(image => {
    image.style.opacity = 0;
    image.style.transition = ' .3s ease-out';
    image.addEventListener('load', function(evt) {
        image.style.opacity = 1;
    });
    var callback = function(entries, observer) {
        /* Content excerpted, show below */
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const lazyImage = entry.target
                lazyImage.src = lazyImage.dataset.src;

            }
        })
    };
    var observer = new IntersectionObserver(callback, options);
    var target = image;
    observer.observe(target);
})