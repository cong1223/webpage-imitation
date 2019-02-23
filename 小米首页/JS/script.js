// 搜索框获得焦点
$(".search input").focus(function() {
     $('.search_pic').css({"border":"1px solid #ff6700","border-left":"none"});
	 $('.search_words').animate({"opacity":"0"},200);
});
// 失去焦点
$(".search input").blur(function() {
     $('.search_pic').css({"border":"1px solid #E0E0E0","border-left":"none"});
	 $('.search_words').animate({"opacity":"1"},200);
});
// banner图模块二级菜单部分
var order = null;
$('.nav_hover>li').hover(function(){
	order = $(this).index();
	$('.tab').eq(order).css({'display':'block'});
	$(this).css({'background-color':'#ff6700'});
},function(){
	$('.tab').css({'display':'none'});
	$(this).css({'background-color':'#2e465a'});
})
$('.tab>ul').hover(function(){
	$('.tab').eq(order).css({'display':'block'});
	$('.nav_hover>li').eq(order).css({'background-color':'#ff6700'});
},function(){
	$('.tab').css({'display':'none'});
	$('.nav_hover>li').eq(order).css({'background-color':'#2e465a'});
})
//右侧固定栏(未解决定位)
$(window).resize(function(){
	var view_width =$(window).width();
//	console.log(view_width);
	if (view_width > 1226 && view_width <= 1380) {
		$('#fix_column').css({"display":"block"}).addClass('changeSize').find('a').css({"display":"none"});
	}
	if (view_width <= 1320) {
		$('#fix_column').css({"display":"none"});
	}
	if (view_width > 1380) {
		$('#fix_column').removeClass('changeSize');
		$('#fix_column').css({"display":"block"}).find('a').css({"display":"block"});
	}	
})
//轮播图
var c = 0;
$('.banner_pic>img').eq(0).show();
//轮播图播放函数
function play(){
	c++;
	c = c>=5?0:c;
	$('.banner_pic>img').eq(c).fadeIn(300).siblings('img').fadeOut();
	$('.but_dots>ul>li').eq(c).css({"border-color":"rgba(0,0,0,0.4)","background":"rgba(255,255,255,.4)"}).
	siblings('li').css({"border-color":"rgba(255,255,255,0.4)","background":"rgba(0,0,0,.4)"});
}
var timer = setInterval(play,1000);
//鼠标移入移出事件
$('.banner_pic').hover(function(){
	clearInterval(timer);
},function(){
	timer = setInterval(play,1000);
});
//向前向后切换图片点击事件
$('.but_left').click( function(){
	c--;
	c = c<=-1?4:c;
	$('.banner_pic>img').eq(c).fadeIn(300).siblings('img').fadeOut();
	$('.but_dots>ul>li').eq(c).css({"border-color":"rgba(0,0,0,0.4)","background":"rgba(255,255,255,.4)"}).
	siblings('li').css({"border-color":"rgba(255,255,255,0.4)","background":"rgba(0,0,0,.4)"});
});
$('.but_right').click( function(){
	c++;
	c = c>=5?0:c;
	$('.banner_pic>img').eq(c).fadeIn(300).siblings('img').fadeOut();
	$('.but_dots>ul>li').eq(c).css({"border-color":"rgba(0,0,0,0.4)","background":"rgba(255,255,255,.4)"}).
	siblings('li').css({"border-color":"rgba(255,255,255,0.4)","background":"rgba(0,0,0,.4)"});
});
//轮播图dots圆点点击事件
$('.but_dots>ul>li').click( function(){
	var dn = $(this).index();
	c = dn;
	$('.banner_pic>img').eq(c).fadeIn(300).siblings('img').fadeOut();
	$(this).css({"border-color":"rgba(0,0,0,0.4)","background":"rgba(255,255,255,.4)"}).
	siblings('li').css({"border-color":"rgba(255,255,255,0.4)","background":"rgba(0,0,0,.4)"});
})
//导航栏菜单显示效果
var tab_timer;
$('.nav_text').hover(function(){
	clearTimeout(tab_timer);
	$('.nav_tab').animate({height:'230px'},300);
},function(){
	tab_timer = setTimeout(function(){
			$('.nav_tab').animate({height:'0'},300);
	},300);
});



