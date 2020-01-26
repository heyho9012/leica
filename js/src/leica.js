(function($){

    const win = $(window),
          body=$('body'),
          wrap=$('#wrap'),
          headBox=wrap.find('#headBox'),
          blogBox=wrap.find('#blogBox'),
          productBox=wrap.find('#productBox'),
          footBox=wrap.find('#footBox');
          
    headBox.load('./temp/header.html',function(){body.append('<script src="../js/src/temp/header.js"></script>');});
    blogBox.load('./temp/blogbox.html',function(){body.append('<script src="../js/src/temp/blogbox.js"></script>');});
    productBox.load('./temp/productbox.html',function(){body.append('<script src="../js/src/temp/productbox.js"></script>');});
    footBox.load('./temp/footer.html');

// --------------------------------------------------------------
    const viewBox=wrap.find('#viewBox'),
          eventBox=wrap.find('#eventBox'),
          storyBox=wrap.find('#storyBox'),
          viewUl=viewBox.find('ul'),
          viewLi=viewUl.find('li'),
          viewDiv=viewUl.find('div'),
          viewIndi=$('.view_indi'),
          storyIndi=$('.story_indi'),
          indiUl=viewIndi.find('ul'),
          indiLi=indiUl.find('li'),
          indiUl02=storyIndi.find('ul'),
          indiLi02=indiUl02.find('li'),
          storyUl=storyBox.find('ul'),
          storyLi=storyUl.find('li'),
          storyDiv=storyLi.find('div'),
          evnetList=eventBox.find('.event_list');
          
// --------------------------------------------------------------
    let winH=win.outerHeight(),
        headBoxH=headBox.outerHeight();

    win.on('scroll', function(){
        let winScroll = win.scrollTop();
        // ---------------------------------
        if(winScroll>headBoxH*2){
            headBox.addClass('action');
        }else{
            headBox.removeClass('action');
        }
    }); // headBox SCROLL action

// --------------------------------------------------------------
    for(let i=0;i<5;i++){indiLi.eq(i).css({left:50*i+'px'});}
    for(let i=0;i<6;i++){indiLi02.eq(i).css({left:50*i+'px'});}
    // ----------------------------------------------------------
    let go,i=0,j=0,timed=3000;

    indiLi.eq(0).find('span').animate({left:'50px'},timed);
    indiLi02.eq(0).find('span').animate({left:'50px'},timed);

    let indiFn = function(indicator,li){
        indicator.find('a').on('click',function(e){
            e.preventDefault();
            let indiIndex=$(this).parent().index();
            li.eq(indiIndex).fadeIn(timed/1.5);
            li.eq(indiIndex).siblings().fadeOut(timed/1.5);
            if(li.eq(0).index()){
                i=li.eq(indiIndex).index();
            }else{
                i=li.eq(indiIndex).index()-1;
            }
        });
    };

    const slideGo = function(){

        indiFn(indiLi,viewLi);
        indiFn(indiLi02,storyLi);

        setInterval(function(){
            i++; j++;
            if(i==5){i=0;} if(j==6){j=0;}
            viewLi.eq(i).fadeIn(timed/1.5).siblings().fadeOut(timed/1.5);
            storyLi.eq(j).fadeIn(timed/1.5).siblings().fadeOut(timed/1.5);
            indiLi.eq(i).find('span').animate({left:'50px'},timed*1.5);
            indiLi.eq(i).siblings().find('span').css({left:'-50px'});
            indiLi02.eq(j).find('span').animate({left:'50px'},timed*1.5);
            indiLi02.eq(j).siblings().find('span').css({left:'-50px'});
        },timed*1.5);

    }; slideGo(); // viewBox, storyBox SETINTERVAL fadeIn&Out && indicatorBar

    const slideStop = function(){clearInterval(go);};      
    viewDiv.on('mouseenter', function(){slideStop();}).on('mouseleave', function(){slideGo();});
    storyDiv.on('mouseenter', function(){slideStop();}).on('mouseleave', function(){slideGo();});

// --------------------------------------------------------------
    evnetList.on('mouseenter',function(){$(this).find('strong').css({color:'#e20613'});})
             .on('mouseleave',function(){$(this).find('strong').css({color:'#fff'});});
    // eventlist HOVER color change

// --------------------------------------------------------------
})(jQuery);