/* https://greensock.com/gsap */
TweenLite.set("#petals", { perspective:600 })
TweenLite.set("img", { xPercent:"-50%", yPercent:"-50%" })

var total = 50;
var warp = document.getElementById("petals"),
    w = window.innerWidth,
    h = window.innerHeight;

for (i = 0; i < total; i++) {
    var Div = document.createElement('div');
    TweenLite.set(Div, { attr: { class:'dot' }, x:R(0,w), y:R(-200,-150), z:R(-200,200)});
    warp.appendChild(Div);
    animm(Div);
}

function animm(elm) {
    TweenMax.to(elm,R(6,15), { y:h+100, ease:Linear.easeNone, repeat:-1, delay:-15 });
    TweenMax.to(elm,R(4,8), { x:'+=100', rotationZ:R(0,180), repeat:-1, yoyo:true, ease:Sine.easeInOut });
    TweenMax.to(elm,R(2,8), { rotationX:R(0,360), rotationY:R(0,360), repeat:-1, yoyo:true, ease:Sine.easeInOut, delay:-5 });
};

function R(min,max) { return min+Math.random() * (max-min) };



var typed = new Typed('#text', {
    strings: ['I know I talked your ear off. Looking back, its like I turned into a human party horn - loud, incessant, and frankly, exhausting. Aside from this, we made something na nakakainis inside and outside the server. Hindi ko na nga dapat ginawa pero tinuloy ko pa din. Gusto ko lang naman sana tumulong kaso sobrang mali talaga. Im not doing this just to get back sa city. Gusto ko lang talaga mag sorry sa lahat ng nagawa namin. This is for a renewed chance to be your friend going forward. And thats a resolution Im truly committed to keeping.'],
    startDelay: 3000,
    typeSpeed: 40,
    backSpeed: 0,
    fadeOut: true,
    loop: false,
    showCursor: false,
    onComplete: function() {
        var author = document.getElementById("author");
        author.style.opacity = 1;
    }
});



let audioReady = false;
  function onAudioLoad() {
    if (!audioReady) {
      audio.play();
      audioReady = true;
    }
  }

  const audio = new Audio('Paramore.mp3');
  audio.addEventListener('loadedmetadata', onAudioLoad);