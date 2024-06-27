
new WOW().init();

const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


window.addDashes = function addDashes(f) {
    var r = /(\D+)/g,
        npa = '',
        nxx = '',
        last4 = '';
    f.value = f.value.replace(r, '');
    npa = f.value.substr(0, 3);
    nxx = f.value.substr(3, 3);
    last4 = f.value.substr(6, 4);
    f.value = npa + '-' + nxx + '-' + last4;
}
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:3,
            loop:true,
        }
    }
})

$('.count').each(function () {
    var size = $(this).text().split(".")[1] ? $(this).text().split(".")[1].length : 0;
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(parseFloat(now).toFixed(size));
        }
    });
});