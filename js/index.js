$(function () {
    $.ajax({
        type:"get",
        url:"json/index.json",
        success:function (data) {
            $.each(data.nav.nav1.login,function (i,t) {
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
            //*导航条
            $.each(data.nav.nav2.list,function (i,t) {
                var li = $('<li class="nav2_list_li"></li>'),box;
                if(i<2){
                    $(li).css('cursor','pointer');
                     box = $('<a class="bluea"></a>').html(t).prop("href",data.nav.nav2.url[i] );
                    var ul = $('<ul class="subMenu "></ul>');
                    $.each(data.nav.nav2['childlist'+i],function (i,t) {
                        $(ul).append($('<li></li>').html(t))
                    });
                    $(li).append(ul)
                }else{
                     box = $('<a class="bluea"></a>').html(t).prop("href",data.nav.nav2.url[i]).addClass('underline')
                }
                $(li.append(box)).appendTo($('.nav2_list'))
            });
            $('.nav2_Right>a').html(data.nav.nav2.list2[0]);
            $('.nav2_Right>span').html(data.nav.nav2.list2[1]);
            $('.lunbo').width((data.images.length+1)*1180);
            //导航条*

            //*轮播图
            $.each(data.images,function (i,t) {
                var img = $('<a href="#"></a>').append($('<img/>').prop('src',t));
                var liTag =$('<li></li>').append(img).appendTo('.lunbo');
                var indexs = $('<span class="iconfont icon-yuanxuankuang1 index"></span>');
                $('.indexs').append(indexs)
                if($('.indexs').children().length===7){
                    $('.indexs span:gt(1)').remove()
                }
                var bannerText = $('<div class="bannerText"></div>').appendTo(img)
                $('<div class="productName"></div>').appendTo(bannerText).html(data.bannerText.productName[i])
                $('<div class="desc"></div>').html(data.bannerText.desc[i]).appendTo(bannerText)
                $('<div class="price"></div>').html(data.bannerText.price[i]).appendTo(bannerText)
                $('<div class="oprate"></div>').html("立即购买").appendTo(bannerText)
            });
            var lastimg = $("<li></li>").append($('<a href="#"></a>').append($('<img width="1180"/>').prop('src',data.images[0])));
            $('.index:first').removeClass('icon-yuanxuankuang1').addClass('icon-yuanxuankuang2');
            $(lastimg).appendTo('.lunbo');
            var bannerText = $('<div class="bannerText"></div>').appendTo(lastimg)
            $('<div class="productName"></div>').appendTo(bannerText).html(data.bannerText.productName[0])
            $('<div class="desc"></div>').html(data.bannerText.desc[0]).appendTo(bannerText)
            $('<div class="price"></div>').html(data.bannerText.price[0]).appendTo(bannerText)
            $('<div class="oprate"></div>').html("立即购买").appendTo(bannerText)

            //轮播图*

            //*产品广告
                //左列表
            $.each(data.sideNavInner,function (i,t) {
                var li = $('<li></li>').append($('<a href="#"></a>').html(t).addClass('whitea underline'));
                $(li).appendTo('.sideNavInner')
            });
                //右列表
            $.each(data.blockNav.blockNavImg,function (i,t) {
                var more = $('<span></span>').append($('<a class="bluea" href="#"></a>').html(data.blockNav.more[i]));
                var img = $('<a href="#"></a>').append($('<img width="265"/>').prop('src',data.blockNav.blockNavImg[i]));
                var p = $('<p class="description"></p>').html(data.blockNav.description[i]);
                var li = $('<li ></li>').append(img,p,more);
                $('.blockNavList').append(li)
            })
            //产品广告*
            //*店长推荐
            $.each(data.sliderList.images,function (i,t) {
                var img = $('<a href="#"></a>').append($('<img width="211"/>').prop('src',data.sliderList.images[i]));
                var h4 = $('<h4 class="Surface "></h4>').html(data.sliderList.title[i]);
                var p = $('<p class=""></p>').html(data.sliderList.description[i]);
                var box = $('<li></li>').append(img,h4,p).appendTo('.listContainerInner');
                if(data.sliderList.Price[i]){
                    $('<div class="boxPrice">售价 : <span class="Price">'+data.sliderList.Price[i]+'</span>起 </div>').appendTo(box);
                }
                if(data.sliderList.tag[i]){
                    $("<span class='tag'></span>").html(data.sliderList.tag[i]).appendTo(box)
                }
            });
            //店长推荐*
            //*各类列表
            $.each(data.productChannels,function (i,t){
                var obj = this;
                var box = $('<div></div>').addClass('productChannel').appendTo($('.productChannels .Containerbox'));
                var title = $('<div></div>').html(this.channelTitle).addClass('channelTitle');
                var inner = $('<p></p>').html(this.inner);
                var a = $('<a href="#" class="viewmore underline"></a>').html('查看更多');
                var first = $('<li></li>').css({
                    'backgroundImage':'url('+this.innerImg+')',
                    'background-size': 'cover',
                    'background-position': 'center',
                    'padding':'14px'
                }).append(inner,a);
                var ul = $('<ul></ul>').append(first);
                $.each(this.title,function (j,c) {
                    var content,li;
                    var img = $('<img width="254">').prop('src',obj.listImg[j]);
                    var h3 = $('<h3></h3>').html(c);
                    var p = $('<p></p>').html(obj.description[j]);
                    var Price = $('<div class="boxPrice">售价 : <span class="Price">'+obj.Price[j]+'</span></div>');
                    content = $('<a href="#"></a>').append(img,h3,p,Price);
                    if(obj.tag){
                        if(obj.tag[j]){
                            var tag = $('<span></span>').html(obj.tag[j]).addClass('tag');
                            li = $('<li></li>').append(tag,content);
                        }else{
                            li = $('<li></li>').append(content);
                        }
                    }else{
                        li = $('<li></li>').append(content);
                    }
                    $(ul).append(li)
                });
                $(box).append(title,ul)
            })
            //各类列表*
            //*热门应用列表
                //大标题
            $('<div></div>').html(data.appsChannel.channelTitle).appendTo('.appsChannel .Containerbox').addClass('channelTitle')
                //游戏列表
            var appList
            var appsChannel = $('<ul></ul>').appendTo('.appsChannel .Containerbox')
            $.each(data.appsChannel.appList,function (i,t) {
                var img = $('<img width="124"/>').prop('src',t.img);
                var name = $('<a href="#"></a>').html(t.name).addClass('name bluea');
                var stars =$('<div></div>').addClass('stars').append($('<img/>').prop('src',t.stars.star_icon),$('<div></div>').width(t.stars.progress));
                appList = $('<li></li>').append(img,name,stars);
                appList.appendTo(appsChannel);
            })
            //热门应用列表*
            //*尾部列表
            $.each(data.footer.list,function (i,t) {        //循环所有的list
                var obj = $('.footer_li').eq(i);
                $.each(t,function (j,u) {       //循环所有list里的内容
                    var box = $('<div></div>').addClass('footer_block');
                    if(u.title){
                        var title = $('<span></span>').html(u.title).appendTo(box);
                    }
                    if(u.links){
                        var ul = $('<ul></ul>').appendTo(box);
                        $.each(u.links,function (index,me) {    //循环内容里的链接
                            var li = $('<li></li>').appendTo(ul);
                            $('<a href="#"></a>').html(me).appendTo(li).addClass('bluea')
                        });
                    }
                    if(u.imgs){
                        var weibo = $('<i></i>').addClass('iconfont icon-weibo').css({'color':'#e71f19','font-size':'50px'})
                        var firse_p = $('<p></p>').html('官方微博');
                        var firse_p2 = $('<p></p>').html('微博官方商城');
                        $('<div></div>').append(weibo,firse_p,firse_p2).appendTo(box);
                        var img = $('<img/>').prop('src',u.imgs);
                        var p =$('<p><i class="iconfont icon-weixin" style="color:#81e22d"></i>微信公众号</p>')
                        var p2 = $('<p></p>').html('微软官方商城');
                        $('<div></div>').append(img,p,p2).appendTo(box)
                    }
                    box.appendTo(obj)
                });
            })
            //尾部列表*
            lunbo()
        }
    });
    //窗口滚动事件
    scrollFix('.nav2','.sliderContainer');
    //客服点击事件
    $('.kefu>button').click(function () {
        $('.kefu').toggleClass('show');
        if($('.kefu').hasClass('show')){
            $(this).hide();
            $('.chatDialog').show();
        }
    });
        //关闭事件
    $('.kefu .close').click(function () {
            $('.chatDialog').hide();
            $('.kefu').removeClass('show');
            $('.kefu button').show()
        }
    );
    //订阅点击事件
    $('.dingyue').click(function () {
        $('.inactDialog ').toggleClass('show');
        if($('.inactDialog').hasClass('show')){
            $('.inactDialog').show();
            $('.dingyue').hide()
        }
    });
    $('.content .close').click(function () {
        $('.dingyue').show();
        $('.inactDialog ').removeClass('show').hide()

    });


    $('.login').hover(function () {
        $(this).css({border:'1px solid #e0e0e0','border-bottom':'1px solid white','background':'white',color:'#0067b8'});
        $('.userLink').show()
    },function () {
        $(this).css({border:0,'background':'#f5f5f5',color:'#333'});
        $('.userLink').hide()
    });
    $(document).on('click','.nav2_list_li',function () {
        $(this).siblings().find('ul').stop().slideUp();
        $(this).find('ul').stop().slideToggle();
    });
    $(document).on('mouseenter','.subMenu>li',function () {
        $(this).addClass('skyblue')
    }).on('mouseleave','.subMenu>li',function () {
        $(this).removeClass('skyblue')
    });
//*轮播图
    scrollTop();
});