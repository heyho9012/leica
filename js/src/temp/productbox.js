//productbox.js

const productBox=$('#productBox'),
      productWrap=$('.slide_wrap').find('ul'),
      productBtn=productBox.find('.button_area').find('button');

// --------------------------------------------------------------
let c=0;
let productListH=productWrap.find('li').outerHeight(true);
// --------------------------------------------------------------
const ProductSlide = function(){

productBtn.off().on('click',function(e){
  e.preventDefault();
  e.stopPropagation();

  let $hasNext=$(this).hasClass('next');  

  productBtn.attr("disabled",true);
  setTimeout(function(){productBtn.removeAttr("disabled");},500);

  if($hasNext){
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

}; 

const ProductSlideM = function(){

    productBtn.off().on('click',function(e){
      e.preventDefault();
      e.stopPropagation();

      let $hasNext=$(this).hasClass('next');  

      productBtn.attr("disabled",true);
      setTimeout(function(){productBtn.removeAttr("disabled");},500);

      if($hasNext){
          c++;
          productWrap.stop().animate({left:'-100%'},function(){
              productWrap.children('li').eq(0).appendTo(productWrap);
              productWrap.css({left:0});
          });
      }else{
          c--;
          productWrap.stop().animate({left:'100%'},function(){
              productWrap.children('li').eq(-1).prependTo(productWrap);
              productWrap.css({left:0});
          });
      }
    });
};

// --------------------------------------------------------------
productWrap.find('a').on('mouseenter focus',function(){
    $(this).addClass('product_action');
    $(this).parent().siblings('p').addClass('product_action');
}).on('mouseleave blur',function(){
    $(this).removeClass('product_action');
    $(this).parent().siblings('p').removeClass('product_action');
});

// --------------------------------------------------------------
    const mobile=767,tablet=1279;
    let beforeW = $(window).outerWidth(true);//margin값까지 포함.

    const DeviceSet = function(winW){
        if(winW <= mobile){
          ProductSlideM();
        }else{
          ProductSlide();
        }
    }; DeviceSet(beforeW);

// --------------------------------------------------------------