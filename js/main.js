const menuBtn = document.querySelector('.menu-open__phone');
const menuPhone = document.querySelector('.navigtion__mobile');

menuBtn.addEventListener('click', function () {
    menuPhone.classList.toggle('active');
});

//MENU-ANIMATE

document.addEventListener('DOMContentLoaded', function () {
    const menuAnimate = document.querySelector('.header__menu');
    const sectionFirstAnimate = document.querySelector('.section-1__text');

    menuAnimate.classList.add('active');
    sectionFirstAnimate.classList.add('active');
})

//SECTION-2 ANIMATE

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const headPage = document.querySelector('.section-2');
        const headPageReady = headPage.offsetHeight / 2;

        const sectionTwoAnimateText = document.querySelector('.section-2__text');
        const sectionTwoAnimateImages = document.querySelector('.section-2__images');
        const scrollY = window.scrollY;

        if (scrollY > headPageReady) {
            sectionTwoAnimateText.classList.add('active');
            sectionTwoAnimateImages.classList.add('active');
        }
    });
});

//SECTION-3 ANIMATE

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const headPageSecond = document.querySelector('.section-3');
        const headPageReadySecond = headPageSecond.offsetHeight / 2;
        const scrollY = window.scrollY;

        console.log(scrollY);

        if (scrollY > headPageReadySecond) {
            document.querySelector('.section-3__text').classList.add('active');
            document.querySelector('.section-3__images').classList.add('active');
        }
    });
});

//SECTION-4 ANIMATE

document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        const headPageThree = document.querySelector('.section-4');
        const headPageReadyThree = headPageThree.offsetHeight / 2;
        const scrollY = window.scrollY;

        if (scrollY > headPageReadyThree) {
            document.querySelector('.section-4__items').classList.add('active');
            document.querySelector('.section-4__text').classList.add('active');
        }
    });
});
