function initSlider(suffix) {
    var mainSettings = {
        type : 'slide',
        perPage: 2,
        arrows : false,
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