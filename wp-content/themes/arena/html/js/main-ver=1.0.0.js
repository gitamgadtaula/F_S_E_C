function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
}
function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

$('.footer-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autopalyspeed: 1000,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 3
        },
        1000: {
            items: 7
        }
    }
});


jQuery(document).ready(function ($) {
    "use strict";
    //  TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        autoplayHoverPause: true,
        smartSpeed: 450,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 3
            }
        }
    });
});


window.onscroll = function () {
   myFunction()
};
var header = document.getElementById("mainHeader");
var sticky = header.offsetTop;
function myFunction() {
   if (window.pageYOffset > sticky) {
       header.classList.add("sticky");
      // $('#smallLogo').show();
       $('#mainHeader').css('box-shadow','0px 0px 40px 0px rgba(0,0,0,0.08)');
   } else {
       header.classList.remove("sticky");
     //  $('#smallLogo').hide();
       $('#mainHeader').css('box-shadow','none');
   }
}



new WOW().init();
wow = new WOW(
        {
            boxClass: 'wow', // default
            animateClass: 'animated', // default
            offset: 0, // default
            mobile: true, // default
            live: true        // default
        }
)
wow.init();

var
        menuRight = document.getElementById('cbp-spmenu-s2'),
        showRight = document.getElementById('showRight'),
        showRight2 = document.getElementById('showRight2'),
        
        menuRight1 = document.getElementById('cbp-spmenu-s3'),
        showRight1 = document.getElementById('showRight1'),
        showRight3 = document.getElementById('showRight3'),
        //showRightPush = document.getElementById('showRightPush'),
        body = document.body;


showRight.onclick = function () {
    classie.toggle(this, 'active');
    classie.toggle(menuRight, 'cbp-spmenu-open');
    //disableOther( 'showRight' );
};

showRight2.onclick = function () {
    classie.toggle(this, 'active');
    classie.toggle(menuRight, 'cbp-spmenu-open');
    //disableOther( 'showRight' );
};

showRight1.onclick = function () {
    classie.toggle(this, 'active');
    classie.toggle(menuRight1, 'cbp-spmenu-open');
};
showRight3.onclick = function () {
    classie.toggle(this, 'active');
    classie.toggle(menuRight1, 'cbp-spmenu-open');
    //disableOther( 'showRight' );
};
