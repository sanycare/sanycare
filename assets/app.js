function initSlider(suffix) {
    var mainSettings = {
        type : 'slide',
        perPage: 2,
        gap: 10,
        arrows : true,
        cover : true,
        fixedHeight: 400
    };

    var thumbnailSettings = {
        rewind : true,
        padding: {top: 10},
        fixedWidth : 104,
        fixedHeight : 58,
        isNavigation : true,
        gap : 10,
        focus : 'center',
        pagination : false,
        cover : true,
        arrows: false,
        dragMinThreshold: {
            mouse: 4,
            touch: 10,
        },
        breakpoints : {
            640: {
                fixedWidth  : 66,
                fixedHeight : 38,
            },
        },
    };

    var main = new Splide( '#main-'+suffix, mainSettings);
    var thumbnail = new Splide( '#thumbnail-'+suffix, thumbnailSettings);
    main.sync( thumbnail );
    main.mount();
    thumbnail.mount();
}

window.addEventListener('scroll', function(e) {
    if (window.scrollY > 100 ) {
        document.getElementById('menu').classList.add('scrolled');
    } else {
        document.getElementById('menu').classList.remove('scrolled');
    }
});

var burger = document.getElementById('burger');
var closeButton = document.getElementById('closeButton');
var menuMobile = document.getElementById('menu-mobile');

burger.addEventListener('click', function() {
    menuMobile.classList.add('open');
})

closeButton.addEventListener('click', function() {
    menuMobile.classList.remove('open');
})

var activeLink = document.getElementById(location.pathname.split('/').pop().replace('.html', ''));
activeLink.classList.add('active');