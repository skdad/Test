$(function () {

    $.ajax({
        type:'get',
        url:'json/lingquan.json',
        success:function (data) {
            $.each(data.yhq,function (i,t) {
                var liTag = $('<li></li>').appendTo('.coupon ul');
                $('<button  class="iconfont icon-xinxiinformation38 icons"></button>').appendTo(liTag);  //按钮
                //第一个盒子
                var couponBox = $('<div class="couponBox"></div>').appendTo(liTag);
                $('<img/>').prop('src','images/coupon-Media-01.png').appendTo(couponBox);        //图片
                            //右边文字
                var right = $('<div class="right"></div>').appendTo(couponBox);
                $('<span class="mark">¥</span>').appendTo(right);
                $('<span class="amount"></span>').html(t.amount).appendTo(right);
                $("<div class='des'></div>").append($('<p></p>').html(t.des)) .appendTo(right);
                    //到期时间
                $('<div class="expire"></div>').html(t.expire).appendTo(liTag);
                    //领取按钮
                $('<div class="operate">立即领取</div>').appendTo(liTag);
                    //隐藏说明
                var detail = $('<div class="detail"></div>').append($('<div class="triangle1"></div>'),$('<div class="triangle2"></div>')).appendTo(liTag);
                $('<span></span>').html(t.detail).appendTo(detail)
            })


            $('.icons').hover(function () {
                console.log(1);
                $(this).siblings('.detail').show()
            },function () {
                $(this).siblings('.detail').hide()
            })
        }
    })

});