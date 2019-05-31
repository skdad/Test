$(function () {
    $.ajax({
        type: "get",
        url: "json/index3.json",
        success: function(data){
            $.each(data.content,function (index,msg) {
                var productBlock = $('<div></div>').addClass('productBlock').appendTo('.product');      //主体盒子
                var productBanner = $('<div></div>').addClass('productBanner').appendTo(productBlock).css('background-image','url('+msg.banner.imgs+')');   //广告盒子1
                var inner = $('<div></div>').addClass('inner').appendTo(productBanner);   //广告盒子2
                var textContent = $('<div></div>').addClass('textContent').appendTo(inner);   //广告盒子3
                //*广告区
                $('<h2></h2>').html(msg.banner.title).appendTo(textContent);    //大标题
                if(msg.banner.title2){
                    $('<h3></h3>').html(msg.banner.title2).appendTo(textContent)
                }
                if(msg.banner.p){
                    $('<p></p>').html(msg.banner.p).appendTo(textContent);  //描述文字
                }
                $('<button></button>').html(msg.banner.btn).appendTo(textContent);
                if(msg.banner.caluse){
                    $('<p></p>').html(msg.banner.caluse).appendTo(textContent);
                }
                //广告区*
                //*内容区
                var ulTag = $('<ul></ul>').appendTo(productBlock) ;  //内容盒子1
                $.each(msg.list,function (i1,t1) {
                    var liTag = $('<li></li>').appendTo(ulTag);     //内容盒子1
                    var contents = $('<div></div>').addClass('contents').appendTo(liTag);       //内容盒子2
                    $('<a href="javascript:"></a>').append($('<img/>').prop('src',t1.imgs)).appendTo(contents);
                    var textBox = $('<div></div>').addClass('desc').appendTo(contents);
                    $('<p></p>').html(t1.name).appendTo(textBox);
                    $('<p></p>').html(t1.description).appendTo(textBox);
                    var selectTag = $('<select></select>').appendTo(contents);      //下拉框
                    $.each(t1.selectContents,function (i2,t2) {
                        $('<option></option>').html(t2).appendTo(selectTag)     //下拉框内容
                    });
                    $('<div class="priceAndBuy"><span>¥ ??,???</span><button>加入购物车</button></div>').appendTo(contents)
                })
                //内容区*
            })
        }
    });
    scrollFix('.nav2','.mainContainer','.navBar','.product')
    function scrollFix(nav1,next1,nav2,naxt2){
        $(document).off('scroll');
        var navTop = $(nav1).offset().top;
        var navHei = $(nav1).height();
        var nav2Top = $(nav2).offset().top;
        var nav2Hei = $(nav2).height();
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

});
