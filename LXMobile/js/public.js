// var initTop = 0;
// //检测页面是向上滑动还是向下滑动
// $(window).scroll(function () {
//     var scrollTop = $(document).scrollTop();
//     if (scrollTop > initTop) {
//         $('.header').addClass('header-hiddened');
//     } else {
//         $('.header').removeClass('header-hiddened');
//     }
//     initTop = scrollTop;
// });

/*判断上下滑动：*/
$('body').bind('touchstart', function (e) {
    startX = e.originalEvent.changedTouches[0].pageX;
    startY = e.originalEvent.changedTouches[0].pageY;
});
$("body").bind("touchmove", function (e) {
    //获取滑动屏幕时的X,Y
    endX = e.originalEvent.changedTouches[0].pageX;
    endY = e.originalEvent.changedTouches[0].pageY;
    //获取滑动距离
    distanceX = endX - startX;
    distanceY = endY - startY;
    //判断滑动方向
    if (Math.abs(distanceX) > Math.abs(distanceY) && distanceX > 0) {
        // console.log('往右滑动');
    } else if (Math.abs(distanceX) > Math.abs(distanceY) && distanceX < 0) {
        // console.log('往左滑动');
    } else if (Math.abs(distanceX) < Math.abs(distanceY) && distanceY < 0) {
        // console.log('往上滑动');
        $('.header').addClass('header-hiddened');
    } else if (Math.abs(distanceX) < Math.abs(distanceY) && distanceY > 0) {
        // console.log('往下滑动');
        $('.header').removeClass('header-hiddened');
    }
})

//轮播图Banner
var swiper_top_banner = new Swiper('.top-banner', {
    loop : true,
    lazy: {
        loadPrevNext: true,
      },
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