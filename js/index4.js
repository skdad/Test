
$(function () {
    scrollFix('.nav2','.content');
    $.ajax({
        type: "get",
        url: "json/index4.json",
        success: function(data){
            //*1.广告
                //*轮播图
            $('.indexs').children().remove();
            $.each(data.slider.url,function (i,t) {
                var li = $('<li></li>').css('background-image','url('+t+')').appendTo($('.banner1 ul'));
                var indexs = $('<span class="iconfont icon-yuanxuankuang1 index"></span>');
                $.each(data.slider.aTag,function (i2,t2) {
                    $('<a class="img"></a>').prop('href','javascript:').html(t2).appendTo(li).css({'bottom':data.slider.position[i].bottom,"right":data.slider.position[i].right[i2],'color':data.slider.color[i]})
                });
                $('.indexs').append(indexs)
            });
            var lastLi = $('<li></li>').css('background-image','url('+data.slider.url[0]+')').appendTo($('.banner1 ul'));
            $.each(data.slider.aTag,function (i2,t2) {
                $('<a class="img"></a>').prop('href','javascript:').html(t2).appendTo(lastLi).css({'bottom':data.slider.position[0].bottom,"right":data.slider.position[0].right[i2],'color':data.slider.color[0]})
            });
            $('.banner1 ul').width($('.banner1 ul').find('li').length*1180);
            $('.index:first').removeClass('icon-yuanxuankuang1').addClass('icon-yuanxuankuang2');
            abc('.banner1 ul');
            //2.广告
            $('.banner2>img').prop('src',data.banner2.url)

            //3.信息
                //信息3.1
            $.each(data.informationBoxs.informationBoxsTag1.img,function (i,t) {
                var liTag = $('<li></li>').appendTo('.information-boxs-tags1');
                if(data.informationBoxs.informationBoxsTag1.tips[i]){
                    $('<span></span>').appendTo(liTag);
                }
                $('<img/>').prop('src',t).appendTo(liTag);
                $('<p></p>').html(data.informationBoxs.informationBoxsTag1.text[i]).appendTo(liTag);
            });
                //信息3.2
            $('.information-boxs-tags2 img').prop('src',data.informationBoxs.informationBoxsTag2.url)
                //信息3.3
            $.each(data.informationBoxs.informationBoxsTag3,function (i,t) {
                var img = $('<img>').prop('src',t.url)
                var pTag = $('<p><span class="product-title">'+t.title+'</span><br>'+t.text+'<br><span class="product-price">'+t.price+'</span></p>');
                $('<li></li>').appendTo('.information-boxs-tags3').append(img,pTag)
            })

            //4.优势(前四个)
            $.each(data.advantage_boxs,function (i,t) {
                var advantage_tag = $('<div></div>').addClass('advantage-tag').appendTo('.advantage').css('background-image','url('+t.backgroundImg+')');
                $('<h4></h4>').html(t.h4).appendTo(advantage_tag);
                $.each(t.p,function (i2,t2) {
                    $('<p></p>').html(t2).appendTo(advantage_tag)
                });
                var ul = $('<ul></ul>').addClass('clearfix').appendTo(advantage_tag);
                $.each(t.li,function (i3,t3) {
                    var li = $('<li></li>').appendTo(ul);
                    $('<img>').prop('src',t3.image).appendTo(li);
                    $('<p></p>').html(t3.p).appendTo(li);
                    if(t3.span){
                        $('<span></span>').appendTo(li)
                    }
                })
            });
            //优势(最后一个)
            $.each(data.advantage_tag5,function (i,t) {
                var swiper_slide = $('<div></div>').addClass('swiper-slide').appendTo('.swiper-wrapper');
                $.each(t,function (i2,t2) {
                    var normal = $('<div></div>').addClass('normal').appendTo(swiper_slide);
                    $('<img>').prop('src',t2.image).appendTo(normal);
                    $('<p class="txt"><span>用户评价：</span>'+t2.txt+'</p>').appendTo(normal);
                    var Recovery = $('<div></div>').appendTo(normal).addClass('Recovery');
                    $('<p></p>').html(t2.Recovery).appendTo(Recovery);
                    $('<p></p>').html(t2.buy).appendTo(Recovery)
                })
            })
            var mySwiper = new Swiper ('.swiper-container', {
                direction: 'horizontal', // 垂直切换选项
                loop: true, // 循环模式选项
                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }
            })
        }
    });
    //轮播图
    scrollTop();
});