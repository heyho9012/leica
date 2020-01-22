// blogBox.js

    const blogBox=$('#blogBox'),
          blogTitle=blogBox.find('.title_list'),
          blogCon=blogBox.find('.content_list');
//-----------------------------------------------------------
    const blog02=blogBox.find('.blog_02'),
          blog02List=blog02.find('li').find('a');

    blog02List.on('mouseenter focus',function(e){
        e.preventDefault();
        $(this).parent().parent().parent().addClass('blog_02_act');

    }).on('mouseleave blur',function(e){
        e.preventDefault();
        $(this).parent().parent().parent().removeClass('blog_02_act');
    });


// --------------------------------------------------------------
    let k=1,timed=3000;

    blogTitle.find('li').find('a').on('click focus',function(e){
        e.preventDefault();
        let blogIndex=$(this).parent().index();
        blogCon.children('li').eq(blogIndex).stop().fadeIn(timed/6).siblings().stop().fadeOut(timed/6);
        k=blogCon.children('li').eq(blogIndex).index();
        $(this).parent().addClass('blog_act').siblings().removeClass('blog_act');
    }); // blogBox list CLICK fadeIn&Out
    //-----------------------------------------------------------
    let startX,endX;

    blogBox.on('touchstart',function(event){
        startX = event.originalEvent.changedTouches[0].screenX;
    });

    blogBox.on('touchend',function(event){
        endX=event.originalEvent.changedTouches[0].screenX;
        if(startX-endX>50){
            k--;
            if(k<=-2){k=1;}
            blogCon.children('li').eq(k).stop().fadeIn(timed/6).siblings().stop().fadeOut(timed/6);
            blogTitle.children('li').eq(k).addClass('blog_act').siblings().removeClass('blog_act');
        }else if(endX-startX>50){
            k++;
            if(k>=3){k=0;}
            blogCon.children('li').eq(k).stop().fadeIn(timed/6).siblings().stop().fadeOut(timed/6);
            blogTitle.children('li').eq(k).addClass('blog_act').siblings().removeClass('blog_act');
        }
        // else if(startX-endX<50 || endX-startX<50 ){}

    }); // blogBox list TOUCH move fadeIn&Out