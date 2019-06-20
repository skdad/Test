$(function () {
    $.ajax({
        type: "get",
        url: "json/index2.json",
        success: function(data){
            //*登录插入内容
            $.each(data.nav1.login,function (i,t) {
                var box;
                if(i===0){
                    box = $('<li></li>').append($('<a class="account" href="#">'+t+'</a>'))
                }else if(i===5){
                    box = $("<li style='margin:20px 0 10px'></li>").append($('<a  class="denglv" href="#"></a>').text(t))
                }
                else{
                    box = $('<li></li>').append($('<a class="underline" href="#"></a>').text(t))
                }
                $(box).appendTo('.userLink ul')
            });
            //登录插入内容*
            //*登录按钮事件
            $('.login').mousedown(function () {
                $('.userLink').stop();
                if($('.userLink').hasClass('show')){
                    $('.login span').html('登录∨');
                    $('.login').css({'background':'#f5f5f5','border':'none'});
                    $('.userLink').slideUp().removeClass('show');
                }else{
                    $('.login span').html('登录∧');
                    $('.login').css({'background':'white','border':'1px solid #e0e0e0'});
                    $('.userLink').slideDown().addClass('show');
                }
            })
            //登录按钮事件*
            //*轮播图
            $.each(data.lunbo,function (i,t) {
                var img = $('<a href="#"></a>').append($('<img width="930"/>').prop('src',t));
                var indexs = $('<span class="iconfont icon-yuanxuankuang1 index"></span>');
                $('<li></li>').append(img).appendTo('.lunbo');
                $('.indexs').append(indexs)
            });
            var lastimg = $('<a href="#"></a>').append($('<img width="930"/>').prop('src',data.lunbo[0]));
            $('.index:first').removeClass('icon-yuanxuankuang1').addClass('icon-yuanxuankuang2');
            $(lastimg).appendTo('.lunbo');
            $('.index').click(function () {
                $('.lunbo').stop();
                index($(this));
                $('.lunbo').animate({
                    'left':$(this).index()*-$('.lunbo').find('img').width()
                });
                i=$(this).index()
            });
            $('.lunbo').width($('.lunbo').find('img').width()*$('.lunbo').find('img').length);
            //轮播图*

            //*主题内容插入
            $.each(data.list,function (i,t) {
                //标题部分
                var More = $('<a href="#" class="underline"></a>').html(t.more);   // 更多链接
                var Title = $('<h1></h1>').html(t.title);        //标题
                var titleBox = $('<div></div>').addClass('title').append(Title,More);
                //内容部分
                var itemList = $('<div></div>').addClass('itemList');    //内容盒子
                    //宣传位
                var banner_title = $('<h2></h2>').html(t.banner.title)
                var banner =$('<div></div>').addClass('item banner').css({'background-image':'url('+t.banner.img+')'}).append(banner_title).appendTo(itemList);   //宣传盒子
                    //商品位
                $.each(t.item,function (j,u) {
                    var img = $('<a href="#"></a>').append($('<img/>').prop('src',u.img)); //图片
                    var h3 = $('<h3></h3>').html(u.title);  //标题
                    var h4 = $('<h4></h4>').html(u.miaoshu);    //描述

                    var originPrice = $('<p><del>'+u.originPrice+'</del></p>'); //删除线
                    var Price = $('<p class="Price2">商务采购价：<span>'+u.Price+'</span></p>');  //价格
                    var btn = $('<a href="#"></a>').addClass('btn').html(u.click);          //按钮
                    var active = $('<div></div>').addClass('active').append(originPrice,Price,btn);      //底部盒子
                    var item = $('<div></div>').addClass('item').appendTo(itemList).append(img,h3,h4,active)  //商品盒子
                });
                var itemBox =   $('<div></div>').addClass('itemBox').appendTo('.content .Containerbox').append(titleBox,itemList);
            })
            //主题内容插入*
            //*侧边悬浮栏
            $('.float>a').click(function () {
                $('.talkBox').toggleClass('show');
                if($('.talkBox').hasClass('show')){
                    $('.talkBox').animate({'right':0})
                }
            })
            $('.float .close').click(function () {
                $('.talkBox').removeClass('show');
                $('.talkBox').animate({'right':'-277px'})
            })
            //侧边悬浮栏*
        }
    });

    //*轮播图
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
    //轮播图*
    scrollTop();
});