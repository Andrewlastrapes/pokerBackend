var _imageArray = [],
    _loadedImages = 0;
setPositionsAndImages();
function setPositionsAndImages(){
  elem('.banner').style.backgroundImage = "url(images/160x600_Store_Closure_100117_bg.jpg)";
  elem('.logo').style.backgroundImage = "url(images/logo.svg)";
  elem('.cta').style.backgroundImage = "url(images/160x600_Store_Closure_100117_cta.png)";
  elem('.f2_text1').style.backgroundImage = "url(images/160x600_Store_Closure_100117_f2_text1.png)";
  elem('.f2_text2').style.backgroundImage = "url(images/160x600_Store_Closure_100117_f2_text2.png)";
  elem('.f2_text3').style.backgroundImage = "url(images/160x600_Store_Closure_100117_f2_text3.png)";
  elem('.brand1').style.backgroundImage = "url(images/160x600_Store_Closure_100117_brand1.png)";
  elem('.brand2').style.backgroundImage = "url(images/160x600_Store_Closure_100117_brand2.png)";
  elem('.brand3').style.backgroundImage = "url(images/160x600_Store_Closure_100117_brand3.png)";
  elem('.brand4').style.backgroundImage = "url(images/160x600_Store_Closure_100117_brand4.png)";
  elem('.fn_text1').style.backgroundImage = "url(images/160x600_Store_Closure_100117_fn_text1.png)";
  _imageArray.push(
    'images/160x600_Store_Closure_100117_bg.jpg',
    'images/160x600_Store_Closure_100117_brand1.png',
    'images/160x600_Store_Closure_100117_brand2.png',
    'images/160x600_Store_Closure_100117_brand3.png',
    'images/160x600_Store_Closure_100117_brand4.png',
    'images/160x600_Store_Closure_100117_cta.png',
    'images/160x600_Store_Closure_100117_f2_text1.png',
    'images/160x600_Store_Closure_100117_f2_text2.png',
    'images/160x600_Store_Closure_100117_f2_text3.png',
    'images/160x600_Store_Closure_100117_fn_text1.png',
    'images/logo.svg'
  );
  preloadImages();
}
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

    .set(['.f2_text1',
          '.f2_text2',
          '.f2_text3',
          '.logo',
          '.brands',
          '.brand1',
          '.brand2',
          '.brand3',
          '.brand4',
          '.fn_text1'
        ],{autoAlpha:0})

    .to('.f2_text1', lT, {autoAlpha:1, ease: Circ.easeIn})
    .to('.f2_text2', lT, {autoAlpha:1, ease: Circ.easeIn})
    .to('.f2_text3', lT, {autoAlpha:1, ease: Circ.easeIn})

    .to('.logo', lT, {autoAlpha:1, ease: Circ.easeIn})

    .to('.f2_text1', lT, {delay:1.5, autoAlpha:0, ease: Circ.easeOut}, 'f2e')
    .to('.f2_text2', lT, {delay:1.5, autoAlpha:0, ease: Circ.easeOut}, 'f2e')
    .to('.f2_text3', lT, {delay:1.5, autoAlpha:0, ease: Circ.easeOut}, 'f2e')

    .to('.brands', lT, {autoAlpha:1, ease: Circ.easeIn})
    .to('.brand1', lT, {autoAlpha:1, ease: Circ.easeIn})
    .to('.brand2', lT, {autoAlpha:1, ease: Circ.easeIn})
    .to('.brand3', lT, {autoAlpha:1, ease: Circ.easeIn})
    .to('.brand4', lT, {autoAlpha:1, ease: Circ.easeIn})
    .to('.brands', sT, {delay:1.5, autoAlpha:0, ease: Circ.easeOut}, 'fns')
    .to('.logo', lT, {delay:1.5, autoAlpha:0, ease: Circ.easeIn}, 'fns')
    .to('.fn_text1', lT, {autoAlpha:1, ease: Circ.easeIn})
  ;
}

function elem(element){
  return document.querySelector(element);
}
elem('.click-tag').addEventListener("click", function(){
  window.open(window.clickTag);
});
