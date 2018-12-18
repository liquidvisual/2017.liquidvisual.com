/*
    MAIN.JS - Last updated: 12.09.18
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// VUE
//-----------------------------------------------------------------

// Vue.config.productionTip = false;

//-----------------------------------------------------------------
// ON LOAD
//-----------------------------------------------------------------

$(window).on('load', function() {
    $('html').addClass('has-loaded');
    pixelGradient();
    launchParallax();
});



$('.lv-alert-bar-close-btn').on('click', function(){
    $(this).parent().remove();
})

//-----------------------------------------------------------------
// ONLOAD - TOOLTIP
//-----------------------------------------------------------------

$(function () {
    $('[data-toggle="tooltip"]').tooltip();
})

//-----------------------------------------------------------------
// PIXEL GRADIENT
//-----------------------------------------------------------------

function pixelGradient() {
    $(".pixel-grad").pxgradient({
        step: 10, // Step Color. The smaller the number, the greater the load. Default: 10
        colors: ["#F12D66","#20B5C3"],
        dir: "x"
    });
}

//-----------------------------------------------------------------
// QUICKIE - refactor
//-----------------------------------------------------------------

window.onscroll = function() {
    var scrollHeight, totalHeight;
    scrollHeight = document.body.scrollHeight;
    totalHeight = window.scrollY + window.innerHeight + 50;

    if (totalHeight >= scrollHeight) {
        $('.global-footer .sprite-long-drip').addClass('animate');
    }
}

//-----------------------------------------------------------------
// EYE PARALLAX
//-----------------------------------------------------------------

function launchParallax() {

    // DAN EYES PARALLAX
    var $target = $('.sprite-dan-head')[0];
    var parallax = new Parallax($target, {
        invertX: false,
        invertY: false,
        limitX: 15,
        limitY: 15,
    });

    // // MITCH EYES PARALLAX
    var $target = $('.sprite-mitch-head')[0];
    var parallax = new Parallax($target, {
        invertX: false,
        invertY: true,
        limitX: 10,
        limitY: 20,
    });
}

//-----------------------------------------------------------------
// CUT DAN'S HAIR (FRILL)
//-----------------------------------------------------------------

// $('.sprite-dan-torso.has-long-hair').click(function(){
//     $(this).toggleClass('has-long-hair');
// });

//-----------------------------------------------------------------
// HEADROOM.js
//-----------------------------------------------------------------

$(".global-header").headroom({
    // vertical offset in px before element is first unpinned
    offset : 60,
    // scroll tolerance in px before state changes
    tolerance : 0,
    // or you can specify tolerance individually for up/down scroll
    tolerance : {
        up : 5,
        down : 0
    },
    // css classes to apply
    classes : {
        // when element is initialised
        initial : "headroom",
        // when scrolling up
        pinned : "headroom--pinned",
        // when scrolling down
        unpinned : "headroom--unpinned",
        // when above offset
        top : "headroom--top",
        // when below offset
        notTop : "headroom--not-top",
        // when at bottom of scoll area
        bottom : "headroom--bottom",
        // when not at bottom of scroll area
        notBottom : "headroom--not-bottom"
    },
    // element to listen to scroll events on, defaults to `window`
    // scroller : someElement,
    // callback when pinned, `this` is headroom object
    onPin : function() {},
    // callback when unpinned, `this` is headroom object
    onUnpin : function() {},
    // callback when above offset, `this` is headroom object
    onTop : function() {},
    // callback when below offset, `this` is headroom object
    onNotTop : function() {},
    // callback when at bottom of page, `this` is headroom object
    onBottom : function() {},
    // callback when moving away from bottom of page, `this` is headroom object
    onNotBottom : function() {}
});

//==================================================
//
//==================================================