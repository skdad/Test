//轮播图函数
function lunbo(){
    $('.jiant').click(function () {
        $(this).addClass('borderB')
    });
    function index(t){
        $(t).siblings().removeClass('icon-yuanxuankuang2').addClass('icon-yuanxuankuang1');
        $(t).removeClass('icon-yuanxuankuang1').addClass('icon-yuanxuankuang2')
    }
    var i=0,t;

    $('.icon-Right-').click(function () {
        $('.lunbo').stop();
        i+=1;
        if(i===$('.lunbo').find('img').length){
            i=1;
            $('.lunbo').css('left',0)
        }
        $('.lunbo').animate({
            'left':i*-$('.lunbo').find('img').width()
        });
        t=i;
        if(t===$('.lunbo').find('img').length-1){
            t=0
        }
        var dian = $('.index').eq(t);
        index(dian)
    });
    $('.icon-Left-').click(function () {
        $('.lunbo').stop();
        i--;
        if(i===-1){
            $('.lunbo').css('left',($('.lunbo').find('img').length-1)*-$('.lunbo').find('img').width());
            i=$('.lunbo').find('img').length-2;
        }
        $('.lunbo').animate({
            'left':i*-$('.lunbo').find('img').width()
        });
        t=i;
        if(t===$('.lunbo').find('img').length-1){
            t=0
        }
        var dian = $('.index').eq(t);
        index(dian)

    });
    var Time
    function time(){
        Time = setInterval(function () {
            $('.icon-Right-').click()
        },2000)
    }
    // time();
    $('.slide').hover(function () {
        clearInterval(Time)
    },function () {
        time()
    });
    $('.index').click(function () {
        $('.lunbo').stop();
        index($(this));
        $('.lunbo').animate({
            'left':$(this).index()*-$('.lunbo').find('img').width()
        });
        i=$(this).index()
    });
}
//导航图滚动函数
function scrollFix(nav1,next1,nav2,naxt2){
    $(document).off('scroll');
    var navTop = $(nav1).offset().top;
    var navHei = $(nav1).height();
    if(nav2){
        var nav2Top = $(nav2).offset().top;
        var nav2Hei = $(nav2).height();
    }
    $(document).scroll(function () {
        var scroll = $(document).scrollTop();
        if(scroll>navTop){
            $(nav1).addClass('floatNav');
            $(next1).css('margin-top',navHei+'px')
        }else{
            $(nav1).removeClass('floatNav');
            $(next1).css('margin-top',"0")
        }
        if(nav2){
            if(scroll+navHei>nav2Top){
                $(nav2).addClass('floatNav').css('top',navHei);
                $(naxt2).css('margin-top',nav2Hei)
            }else{
                $(nav2).removeClass('floatNav');
                $(naxt2).css('margin-top','0')
            }
        }
    })
}

//轮播图函数2
function abc(obj) {
    //父元素
    $('.icon-Right-'),$('.icon-Left-').off('click');
    var i=0,t;
    var imgWid = $(obj).find('li').width();
    $('.icon-Right-').click(function () {
        $(obj).stop();
        i+=1;
        if(i===$(obj).find('li').length){
            i=1;
            $(obj).css('left',0)
        }
        $(obj).animate({
            'left':i*-imgWid
        });
        t=i;
        if(t===$(obj).find('li').length-1){
            t=0
        }
        var dian = $('.index').eq(t);
        index(dian)
    });
    $('.icon-Left-').click(function(){
        $(obj).stop();
        i--;
        if(i===-1){
            $(obj).css('left',($(obj).find('li').length-1)*-imgWid);
            i=$(obj).find('li').length-2;
        }
        $(obj).animate({
            'left':i*-imgWid
        });
        t=i;
        if(t===$(obj).find('li').length-1){
            t=0
        }
        var dian = $('.index').eq(t);
        index(dian)
    });
    function index(t){
        $(t).siblings().removeClass('icon-yuanxuankuang2').addClass('icon-yuanxuankuang1');
        $(t).removeClass('icon-yuanxuankuang1').addClass('icon-yuanxuankuang2')
    }
    $('.index').click(function () {
        $(obj).stop();
        index($(this));
        $(obj).animate({
            'left':$(this).index()*-imgWid
        });
        i=$(this).index()
    });
    var Time
    function time(){
        Time = setInterval(function () {
            $('.icon-Right-').click()
        },2000)
    }
    var parentObj = $(obj).parent();
    time();
    $(parentObj).hover(function () {
        clearInterval(Time)
    },function () {
        time()
    });
}

//回到顶部
function scrollTop(){
    console.log(1)
    $(document).scroll(function () {
        console.log($(document).scrollTop());
        if($(document).scrollTop()>250){
            $('.scrollTop').show()
        }else{
            $('.scrollTop').hide()
        }
    });
    $('.scrollTop').click(function () {
        $('html').animate({scrollTop:0},300)
    });
}

