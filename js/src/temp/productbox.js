//productbox.js

const 
productBox=$('#productBox'),
productWrap=$('.slide_wrap').find('ul'),
productBtn=productBox.find('.button_area').find('button');

let c=0;
let productListH=productWrap.find('li').outerHeight(true);
productWrap.css({marginTop:-productListH});

const productSlide = function(){

productBtn.off().on('click',function(e){
  e.preventDefault();
  e.stopPropagation();

  let $has=$(this).hasClass('next');  

  productBtn.attr("disabled",true);
  setTimeout(function(){productBtn.removeAttr("disabled");},500);

  if($has){
      c++;
      productWrap.stop().animate({top:-productListH},function(){
          productWrap.children('li').eq(0).appendTo(productWrap);
          productWrap.css({top:0});
      });
  }else{
      c--;
      productWrap.stop().animate({top:productListH},function(){
          productWrap.children('li').eq(-1).prependTo(productWrap);
          productWrap.css({top:0});
      });
  }
});

}; productSlide();