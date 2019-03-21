$(document).ready(function () {
    checkCookie();
    showProductsTiptool();
    scrollToSection();
    moveSlider();
    scrollWithArrows();
});

/* Check if localStorage contains cookie, 
if does not show the cookies section */
const checkCookie = () => {

    let cookie = localStorage.getItem("cookie");
    const cookieSection = $('.mainPage__cookies');
    const cookieBtn = $('.cookies__btn');

    if (cookie !== 'true') {
        cookieSection.fadeIn();
    }
    cookieBtn.click(() => {
        cookieSection.fadeOut();
        localStorage.setItem('cookie', 'true');
    })
}

/* Display products's tooltips */
const showProductsTiptool = () => {
    const product = $(".test .products__boxProducts");
    let toolTip;

    product.hover(
        function () {
            var index = $(this).index();
            toolTip = $('.product__text:eq(' + index + ')');
            toolTip.collapse('show');
        }
    );
}

/* Scroll to the section by navigation bar */
const scrollToSection = () => {
    jQuery(document).ready(function ($) {
        function scrollToSection(event) {
            event.preventDefault();
            var $section = $($(this).attr('href'));
            $('html, body').animate({
                scrollTop: $section.offset().top
            }, 500);
        }
        $('[data-scroll]').on('click', scrollToSection);
    }(jQuery));
}

/* Move Slider by dots. Check width of slider and change
margin for it */
const moveSlider = () => {
    const dot = $('.dotsContainer__dot');
    const sliderContainer = $('.quoteContainer__carousel');
    const slider = $('.quoteContainer__carousel');

    //reset slider position if resize
    $(window).resize(function () {
        slider.css({
            'position': 'relative',
            'margin-left': 0
        })
        dot.css('background-color', 'rgba(255, 255, 255, .6)');
        $('.dotsContainer__dot:eq(0)').css('background-color', 'rgba(255, 255, 255, 1)');
    });

    dot.click(function () {
        let index = $(this).index();
        let dotCount = dot.length;
        let sliderWidth = sliderContainer.outerWidth() / dotCount; //width of slider responsible for moving the value of slider;

        slider.css({
            'margin-left': -sliderWidth * index
        })
        //reset dot color
        dot.css('background-color', 'rgba(255, 255, 255, .6)');
        //set color of clicked dot to white
        $(this).css('background-color', 'rgba(255, 255, 255, 1)');
    })
}


/* Scroll up/down with arrow navigation */
const scrollWithArrows = () => {
    const arrowUp = $('.arrowContainer__arrowTop');
    const arrowDown = $('.arrowContainer__arrowBottom');
    const mainPage = $('.mainPage');
    const clientsSection = $('.clients');

    arrowUp.click(function () {
        $('html,body').animate({
                scrollTop: mainPage.offset().top
            },
            'slow');
    });
    arrowDown.click(function () {
        $('html,body').animate({
                scrollTop: clientsSection.offset().top
            },
            'slow');
    });
}