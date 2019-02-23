//最顶部导航栏部分
$('.nav_li').hover(function(e){
	e.stopPropagation();
	if(e.target == $('.li4')[0]){
		return false;
	}
	$(this).css({'background-color':'#fff','border-width':'1px','border-style':'solid','border-color':'#Ededed #Ededed transparent #Ededed'});
	$(this).find('.icon-icon--').css({'transform':'rotate(180deg)','transition':'transform 0.1s'});
	$(this).find('.mobile_sn_code').css({'height':'244px'});
},function(e){
	e.stopPropagation();
	if(e.target == $('.li4')[0]){
		return false;
	}
	$(this).css({'background-color':'#f5f5f5','border-width':'1px','border-style':'solid','border-color':'transparent'});
	$(this).find('.icon-icon--').css({'transform':'rotate(0deg)'});
	$(this).find('.mobile_sn_code').css({'height':'0'});
});
//网站导航
$('.li1').hover(function(){
	$(this).children('.hide_nav_li1').css({'height':'265px','border-width':'1px','border-style':'solid','border-color':'transparent #ddd #ddd #ddd'});
},function(){
	$(this).children('.hide_nav_li1').css({'height':'0','border-width':'1px','border-style':'solid','border-color':'transparent'});
//	$(this).children('.hide_nav_li1').css({'height':'0','border':'none'});
	setTimeout(function(){
		$('.li1').children('.hide_nav_li1').css({'height':'0','border':'none'});
	},300)
});
//商家入驻
$('.li2').hover(function(){
	$(this).children('.hide_nav_li2').css({'height':'150px','border-width':'1px','border-style':'solid','border-color':'transparent #ddd #ddd #ddd'});
},function(){
	$(this).children('.hide_nav_li2').css({'height':'0','border-width':'1px','border-style':'solid','border-color':'transparent'});
	setTimeout(function(){
		$('.li2').children('.hide_nav_li2').css({'height':'0','border':'none'});
	},300)
});
//客户服务
$('.li3').hover(function(){
	$(this).children('.hide_nav_li3').css({'height':'150px','border-width':'1px','border-style':'solid','border-color':'transparent #ddd #ddd #ddd'});
},function(){
	$(this).children('.hide_nav_li3').css({'height':'0','border-width':'1px','border-style':'solid','border-color':'transparent'});
	setTimeout(function(){
		$('.li3').children('.hide_nav_li3').css({'height':'0','border':'none'});
	},300)
});
//地区位置
$('.li4').click(function(e){
	e.stopPropagation();
	console.log('111');
	$(this).css({'background-color':'#fff','border-width':'1px','border-style':'solid','border-color':'#Ededed #Ededed transparent #Ededed'});
	$(this).children('.hide_nav_li4').css({'display':'block','border-width':'1px','border-style':'solid','border-color':'transparent #ddd #ddd #ddd'});
});
$('.close').click(function(e){
	e.stopPropagation();
	$(this).parents('.hide_nav_li4').css("display",'none');
	$(this).parents('.li4').css({'background-color':'#f5f5f5','border-width':'1px','border-style':'solid','border-color':'transparent'});
});
$('.hide_nav_li4').click(function(){
	return false;
});
$('.hide_nav_li4').hover(function(){
	return false;
},function(){
	return false;
});
$('.city').click(function(){
	$(this).css({'border-color': '#DDDDDD #DDDDDD #fff #DDDDDD'});
	$(this).siblings('.prov').css({'border-color': '#DDDDDD'});
	$('.selectCityItem').css({'display':'block'});
	$('.selectProvItem').css({'display':'none'});
});
$('.prov').click(function(){
	$(this).css({'border-color': '#DDDDDD #DDDDDD #fff #DDDDDD'});
	$(this).siblings('.city').css({'border-color': '#DDDDDD'});
	$('.selectCityItem').css({'display':'none'});
	$('.selectProvItem').css({'display':'block'});
});
//顶部导航部分结束



//全部商品分类隐藏区域
$('.banner_nav_target').hover(function(){
	$(this).next('.hide_nav_list').show();
},function(){
	$(this).next('.hide_nav_list').hide();
});
$('.hide_nav_list').hover(function(){
	$(this).show();
	$(this).prev('.banner_nav_target').css({'background':'#fff'});
	$(this).prev('.banner_nav_target').find('a').css({'color':'#333'});
},function(){
	$(this).hide();
	$(this).prev('.banner_nav_target').css({'background':'#252221'});
	$(this).prev('.banner_nav_target').find('a').css({'color':'#fff'});
});
//全部商品分类隐藏区域结束


//主会场固定栏
var fix_box = $('#fix_box');
$(window).scroll(function(){
	var scroll = $(document).scrollTop(); //800
//	$('title').html(scroll);
	if (scroll > 800) {
		fix_box.css({'bottom':'0','transition':'bottom 0.5s'});
	}else{
		fix_box.css({'bottom':'-150px','transition':'bottom 0.5s'});
	}
})
//主会场固定栏结束

//右侧固定栏
$('.manage').hover(function(){
	$(this).children('.indexTop').css({'background-color':'#F5C568'});
	$(this).children('.indexbtm').css({'background-color':'#F5C568','transform':'translateX(-35px)','transition':'transform 0.5s'});
	$(this).find('.manage_word').css({'color':'#383838','background':'#F5C568'});
},function(){
	$(this).children('.indexbtm').css({'background-color':'#383838','transform':'translateX(0)','transition':'transform 0.5s'});
	$(this).find('.manage_word').css({'color':'#f5c568','background':'#383838'});
	$(this).children('.indexTop').css({'background-color':'#383838'});
});
$('.spoor').hover(function(){
	$(this).children('.indexTop').css({'background-color':'#F5C568'});
	$(this).children('.indexbtm').css({'background-color':'#F5C568','transform':'translateX(-35px)','transition':'transform 0.5s'});
	$(this).find('.spoor_word').css({'color':'#383838','background':'#F5C568'});
},function(){
	$(this).children('.indexbtm').css({'background-color':'#383838','transform':'translateX(0)','transition':'transform 0.5s'});
	$(this).find('.spoor_word').css({'color':'#f5c568','background':'#383838'});
	$(this).children('.indexTop').css({'background-color':'#383838'});
});
$('.check').hover(function(){
	$(this).children('.indexTop').css({'background-color':'#F5C568'});
	$(this).children('.indexbtm').css({'background-color':'#F5C568','transform':'translateX(-35px)','transition':'transform 0.5s'});
	$(this).find('.check_word').css({'color':'#383838','background':'#F5C568'});
},function(){
	$(this).children('.indexbtm').css({'background-color':'#383838','transform':'translateX(0)','transition':'transform 0.5s'});
	$(this).find('.check_word').css({'color':'#f5c568','background':'#383838'});
	$(this).children('.indexTop').css({'background-color':'#383838'});
});


$('.online').hover(function(){
	$(this).children('.indexTop').css({'background-color':'#F5C568'});
	$(this).children('.indexbtm').css({'background-color':'#F5C568','transform':'translateX(-70px)','transition':'transform 0.5s'});
	$(this).find('.online_word').css({'color':'#383838','background':'#F5C568'});
},function(){
	$(this).children('.indexbtm').css({'background-color':'#383838','transform':'translateX(0)','transition':'transform 0.5s'});
	$(this).find('.online_word').css({'color':'#f5c568','background':'#383838'});
	$(this).children('.indexTop').css({'background-color':'#383838'});
});
$('.opion').hover(function(){
	$(this).children('.indexTop').css({'background-color':'#F5C568'});
	$(this).children('.indexbtm').css({'background-color':'#F5C568','transform':'translateX(-70px)','transition':'transform 0.5s'});
	$(this).find('.opion_word').css({'color':'#383838','background':'#F5C568'});
},function(){
	$(this).children('.indexbtm').css({'background-color':'#383838','transform':'translateX(0)','transition':'transform 0.5s'});
	$(this).find('.opion_word').css({'color':'#f5c568','background':'#383838'});
	$(this).children('.indexTop').css({'background-color':'#383838'});
});
$('.app').hover(function(){
	$(this).parents('#sn_slidebar').next('#fix_app_picture').css({'transform':'translateX(0)'});
},function(){
	$(this).parents('#sn_slidebar').next('#fix_app_picture').css({'transform':'translateX(148px)'});
});
$('.anchor').hover(function(){
	$(this).children('.indexTop').css({'background-color':'#F5C568'});
	$(this).children('.indexbtm').css({'background-color':'#F5C568','transform':'translateX(-70px)','transition':'transform 0.5s'});
	$(this).find('.anchor_word').css({'color':'#383838','background':'#F5C568'});
},function(){
	$(this).children('.indexbtm').css({'background-color':'#383838','transform':'translateX(0)','transition':'transform 0.5s'});
	$(this).find('.anchor_word').css({'color':'#f5c568','background':'#383838'});
	$(this).children('.indexTop').css({'background-color':'#383838'});
});
//右侧固定栏结束



//轮播图区域初始化
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal', // 垂直切换选项
    effect: 'fade', //切换模式，fade为淡入淡出
    speed: 1000, //切换速度
    loop: true, // 循环模式选项
    watchOverflow:true,//当没有足够的slide切换时，例如只有1个slide（非loop），swiper会失效且隐藏导航。
		grabCursor : true,//设置为true时，鼠标覆盖Swiper时指针会变成手掌形状，拖动时指针会变成抓手形状。
//  autoplay: true,
		autoplay: {
	    delay: 3000,
	    stopOnLastSlide: false,  //最后一张时停止自动播放
	    disableOnInteraction: true,   //操作swiper后禁止自动播放
    },
    simulateTouch: false, //模拟手机点击滑屏效果
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      hiddenClass: 'btn-hidden',//某些情况下需要隐藏前进后退按钮时，可以设定一个自定义的类名。
    },
})  


//鼠标移入停止自动播放,移出开启自动播放
$('.swiper-slide').mouseenter(function () {
   mySwiper.autoplay.stop();
})
$('.swiper-slide').mouseleave(function () {
   mySwiper.autoplay.start();
});

//轮播图区域结束

