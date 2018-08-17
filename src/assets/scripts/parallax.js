/*
    PARALLAX.JS - Last updated: 17.08.18
*/
//-----------------------------------------------------------------
// VARIABLES
//-----------------------------------------------------------------
//-----------------------------------------------------------------
// PARALLAX SCENES
//-----------------------------------------------------------------

var targetElements = document.getElementsByClassName('has-parallax');

var scenes = [];

for (var i = 0; i < targetElements.length; i++) {
    scenes.push(new Parallax(targetElements[i], {
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