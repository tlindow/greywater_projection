// var lineDrawing = anime({
//   targets: '#lineDrawing .lines path',
//   strokeDashoffset: [anime.setDashoffset, 0],
//   easing: 'easeInOutSine',
//   duration: 2500,
//   delay: function(el, i) {
//     return i * 250
//   },
//   direction: 'alternate',
//   loop: true
// });
var min = 4000;
var max = 7000;
var animeVar;
// var thing;

// var play = function playAnimation() {
document.getElementById('lineDrawing').style.visibility = 'visible';
var pathEls = document.querySelectorAll('path');
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute('stroke-dashoffset', offset);
  animeVar = anime({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: anime.random(min, max),
    delay: anime.random(0, 3000),
    loop: true,
    direction: 'alternate',
    easing: 'easeInOutSine',
    autoplay: true
  });
}
// };
//
// function checkFlag(thing, play) {
//   if (this.thing !== true) {
//     window.setTimeout(checkFlag, 100); /* this checks the flag every 100 milliseconds*/
//   } else {
//     this.play();
//   }
// }
//
// checkFlag();