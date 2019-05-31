$(function () {
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
            i=$('.lunbo').find('img').length-2
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
    function time(){
        Time = setInterval(function () {
            $('.icon-Right-').click()
        },2000)
    }
    time();
    $('.slide').hover(function () {
        clearInterval(Time)
    },function () {
        time()
    })
})