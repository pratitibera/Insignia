const responsive = {
    0: {
        items: 1
    },
    767: {
        items: 2
    },
    1024: {
        items: 3
    }
}

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });
});