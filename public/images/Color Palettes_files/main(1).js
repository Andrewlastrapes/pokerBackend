var _loadedImages = 0,
    _imageArray = new Array(  'images/728x90_Store_Closure_FF20_100517_bg.jpg',
                              'images/728x90_Store_Closure_FF20_100517_brand1.png',
                              'images/728x90_Store_Closure_FF20_100517_brand2.png',
                              'images/728x90_Store_Closure_FF20_100517_brand3.png',
                              'images/728x90_Store_Closure_FF20_100517_brand4.png',
                              'images/728x90_Store_Closure_FF20_100517_cta.png',
                              'images/728x90_Store_Closure_FF20_100517_f1_text1.svg',
                              'images/728x90_Store_Closure_FF20_100517_f2_text1.png',
                              'images/728x90_Store_Closure_FF20_100517_f2_text2.png',
                              'images/728x90_Store_Closure_FF20_100517_f2_text3.png',
                              'images/728x90_Store_Closure_FF20_100517_fn_text1.png',
                              'images/logo.svg'
);


this.addEventListener('DOMContentLoaded', preloadImages);


function preloadImages() {
  for (var i = 0; i < _imageArray.length; i++) {
    var _tempImage = new Image();
    _tempImage.addEventListener('load', trackProgress);
    _tempImage.src = _imageArray[i]
  }
}
function trackProgress() {
  _loadedImages++;
  if(_loadedImages == _imageArray.length) {
    init();
  }
}
function init(){

  var generalTimeline = new TimelineMax(),
      sT = 0.3,
      lT = 0.6;

  elem('.banner').style.display = "block";

  generalTimeline

    .to('.f1_text1', lT, {opacity:1, ease: Circ.easeIn})
    .to('.f1_text1', lT, {delay:1, opacity:0, ease: Circ.easeOut})

    .to('.f2_text1', lT, {opacity:1, ease: Circ.easeIn})
    .to('.f2_text2', lT, {opacity:1, ease: Circ.easeIn})
    .to('.f2_text3', lT, {opacity:1, ease: Circ.easeIn})

    .to('.line', lT, {opacity:1, ease: Circ.easeIn})
    .to('.logo', lT, {opacity:1, ease: Circ.easeIn}, 'logo')
    .to('.cta', lT, {opacity:1, ease: Circ.easeIn}, 'logo')

    .to('.f2_text1', lT, {delay:1, opacity:0, ease: Circ.easeOut}, 'f2e')
    .to('.f2_text2', lT, {delay:1, opacity:0, ease: Circ.easeOut}, 'f2e')
    .to('.f2_text3', lT, {delay:1, opacity:0, ease: Circ.easeOut}, 'f2e')

    .to('.brands', lT, {opacity:1, ease: Circ.easeIn})

    .to('.brand1', lT, {opacity:1, ease: Circ.easeIn})
    // .to('.brand1', sT, {delay:1, opacity:0, ease: Circ.easeOut})

    .to('.brand2', lT, {opacity:1, ease: Circ.easeIn})
    // .to('.brand2', sT, {delay:1, opacity:0, ease: Circ.easeOut})

    .to('.brand3', lT, {opacity:1, ease: Circ.easeIn})
    // .to('.brand3', sT, {delay:1, opacity:0, ease: Circ.easeOut})

    .to('.brand4', lT, {opacity:1, ease: Circ.easeIn})
    // .to('.brand4', sT, {delay:1, opacity:0, ease: Circ.easeOut})

    .to('.brands', lT, {delay:2,opacity:0, ease: Circ.easeOut})

    .to('.fn_text1', lT, {opacity:1, ease: Circ.easeIn})


  ;
}

function elem(element){
  return document.querySelector(element);
}
elem('.click-tag').addEventListener("click", function(){
  window.open(window.clickTag);
});
