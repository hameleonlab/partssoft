import $ from 'jquery'
import 'slick-carousel'

$('.carusel').slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    nextArrow: '<div class="slick-next slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none"><circle cx="22.5" cy="22.5" r="22.5" transform="rotate(-180 22.5 22.5)" fill="#CCCCCC" fill-opacity="0.6"/><path d="M18.5148 28.5858L19.929 30L27 22.9289L19.9289 15.8579L18.5147 17.2721L24.1716 22.929L18.5148 28.5858Z" fill="black"/></svg></div>',
    prevArrow: '<div class="slick-prev slick-arrow"><svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 45 45" fill="none"><circle cx="22.5" cy="22.5" r="22.5" fill="#CCCCCC" fill-opacity="0.6"/><path d="M26.4852 16.4142L25.071 15L18 22.0711L25.0711 29.1421L26.4853 27.7279L20.8284 22.071L26.4852 16.4142Z" fill="black"/></svg></div>',
    responsive: [
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 750,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
})