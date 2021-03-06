// footer.js

const footBox=$('#footBox'),
      footList01=footBox.find('.foot_list_01');

// --------------------------------------------------------------
footList01.find('dd').find('a').on('mouseenter focus',function(){
    $(this).addClass('foot_act');
    $(this).parent().siblings('dt').find('a').addClass('foot_act');
}).on('mouseleave blur',function(){
    $(this).removeClass('foot_act');
});

footList01.find('dd').on('mouseleave',function(){
    $(this).siblings('dt').find('a').removeClass('foot_act');
});
for(let i=0;i<5;i++){
    footList01.find('li').eq(i).find('dd').find('a').eq(-1).on('blur',function(){
        $(this).parent().siblings('dt').find('a').removeClass('foot_act');
    });
}

// --------------------------------------------------------------
const FootFn = function(){
    footList01.find('dt').find('a').on('click',function(e){
        e.preventDefault();
        $(this).parent().siblings('dd').stop().slideToggle();
        for(let i=0;i<4;i++){
            $(this).parent().parent().parent().siblings().find('dd').eq(i).stop().slideUp();
        }
    });
}; 
let count = 0;
const PcVer = function(){ 
    footBox.find('.pc_ver').on('click',function(e){
        e.preventDefault();
        $('html,body').stop().animate({scrollTop:0},0);
        $('meta').eq(1).attr({"content":"width=1280"});
        $('#viewBox').css({height:'800px'});
        ProductSlide();
        footList01.find('dt').find('a').off('click');
        headBox.find('input').stop().fadeOut();
        count++;
    });
}; 

// --------------------------------------------------------------
const DeviceFoot = function(winW){
    if(winW <= tablet){
        FootFn();
        PcVer();
    }
}; DeviceFoot(beforeW);

// --------------------------------------------------------------

