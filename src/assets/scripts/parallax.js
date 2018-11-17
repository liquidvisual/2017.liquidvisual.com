/*
    PARALLAX.JS - Last updated: 11.09.18

    NOTES
    	- https://davidwalsh.name/nodelist-array
        - https://stackoverflow.com/questions/1248081/get-the-browser-viewport-dimensions-with-javascript
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------

var browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var parallaxElements = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]'));
var scenes = [];

//-----------------------------------------------------------------
// PARALLAX SCENES
//-----------------------------------------------------------------

if (browserWidth > 760) {
	var parallaxElementsMediumUp = Array.prototype.slice.call(document.querySelectorAll('[data-parallax-md-up]'))
	parallaxElements = parallaxElements.concat(parallaxElementsMediumUp);
}

for (var i = 0; i < parallaxElements.length; i++) {
    scenes.push(new Parallax(parallaxElements[i], {
        limitX: 10,
        limitY: 10,
        pointerEvents: true,
        relativeInput: true,
        hoverOnly: true
    }));
}

// var parallax = new Parallax(target, {
//     limitX: 10,
//     limitY: 10,
//     relativeInput: true,
//     hoverOnly: true
// });

//-----------------------------------------------------------------
//
//-----------------------------------------------------------------
//==================================================
//
//==================================================