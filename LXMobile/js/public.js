var initTop = 0;
//检测页面是向上滑动还是向下滑动
$(window).scroll(function () {
    var scrollTop = $(document).scrollTop();
    if (scrollTop > initTop) {
        $('.header').addClass('header-hiddened');
    } else {
        $('.header').removeClass('header-hiddened');
    }
    initTop = scrollTop;
});
//打开导航菜单
function openRightMenu() {
    // layer.open({
    //     content: 'hello -- layer'
    //     , skin: 'msg'
    //     , time: 2 //2秒后自动关闭
    // });
    layer.open({
        type: 1,
        content: $(".menu").html(),
        anim: 'right',
        style: 'position:fixed; bottom:0; left:40%; width: 60%; height:100%;border:none;'
    });
}
//关闭导航菜单
function closeRightMenu() {
    $('.nav-second').hide();
    $('.menu-nav-frist-lev').show();
    layer.closeAll();
}
//显示二级导航
function showSecondNavList(obj) {
    var event_val = $(obj).attr("data-event");
    if (!event_val.startsWith("menu-")) {
        location.href = event_val;
        return;
    }

    //显示UL
    console.log('显示UL:' + event_val);
    $(obj).parent().parent().hide();
    $('.' + event_val).fadeIn(500);
}
//显示一级导航
function showFristNavList(obj) {
    $(obj).parent().parent().hide();
    $('.menu-nav-frist-lev').fadeIn(500);
}

//轮播图Banner
var swiper_top_banner = new Swiper('.top-banner', {
    pagination: {
        el: '.pagination-top-banner',
        dynamicBullets: true
    },
    autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },
});