// header.js

const headBox=$('#headBox'),
      gnb=headBox.find('#gnb'),
      gnbTitle=gnb.children('ul').children('li'),
      gnbSubTitle=gnbTitle.find('ul'),
      menuBtn=headBox.find('.menu_icon');
      
menuBtn.on('click',function(e){
    e.preventDefault();
    menuBtn.toggleClass('menu_act');
}); //headBox,footBox LOAD & FUNCTION

let time=400;

gnbTitle.children('a').on('mouseenter focus',function(){
    let gnbTIndex=$(this).siblings('ul').find('li').length;
    $(this).siblings('ul').stop().slideDown(time*(gnbTIndex/4));
    $(this).addClass('gnb_action');
    console.log(gnbTIndex);
});
gnbSubTitle.children('l1').children('a').eq(-1).on('blur',function(){
    $(this).parent().parent().stop().slideUp(time);
});
gnbTitle.on('mouseleave blur',function(){
    $(this).children('ul').stop().slideUp(time);
    $(this).children('a').removeClass('gnb_action');
});
