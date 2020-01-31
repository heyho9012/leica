// header.js

const headBox=$('#headBox'),
      gnb=headBox.find('#gnb'),
      gnbTitle=gnb.children('ul').children('li'),
      menuBtn=headBox.find('.menu_icon'),
      menuBox=headBox.find('.menu_box');
      
menuBox.css({display:'none'});

menuBtn.on('click',function(e){
    e.preventDefault();
    menuBtn.toggleClass('menu_act');
    menuBox.fadeToggle();
}); //headBox,footBox LOAD & FUNCTION

menuBox.on('scroll touchmove mousewheel',function(e){
    e.preventDefault();
    e.stopPropagation();
    return false;
}); //menuBox scroll & touchmove & mousewheel fixing

let time=400;

gnbTitle.children('a').on('mouseenter focus',function(){
    let gnbTIndex=$(this).siblings('ul').find('li').length;
    $(this).siblings('ul').stop().slideDown(time*(gnbTIndex/4));
    $(this).addClass('gnb_action');
});
for(let i=0;i<7;i++){
    gnbTitle.eq(i).find('ul').find('li').children('a').eq(-1).on('blur',function(){
        $(this).parent().parent().stop().slideUp(time);
        $(this).parent().parent().parent().children('a').removeClass('gnb_action');
    });
}
gnbTitle.on('mouseleave',function(){
    $(this).children('ul').stop().slideUp(time);
    $(this).children('a').removeClass('gnb_action');
});
