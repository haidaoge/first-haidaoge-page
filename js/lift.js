


$('.lift_it').click(function(){//点击跳转
var c=$('.lift_it').index($(this));
if(c<10){
	var cH=$('.j_lift').eq(c).offset().top-50;
	$('.lift_btn').removeClass('lift-on');
	$(window).unbind('scroll',Scro);
	$('html,body').animate({scrollTop:cH},'slow',function(){
		c==0?$(document).scrollTop(cH):$(document).scrollTop(cH);
		$('.lift_btn').eq(c).addClass('lift-on');
		$(window).bind('scroll',Scro);
	})
	//-50是顶部搜索框的高度，+80是第一个lift类的高度为130-顶部搜索框的高度；
}else{
	$(window).unbind('scroll',Scro);
	$('html,body').animate({scrollTop:0},'slow',function(){
		$(window).bind('scroll',Scro);
		$('document').scrollTop(0)
	})
}
})

var h=new Array();
for (i=0;i<$('.j_lift').length;i++) {
	h[i]=$('.j_lift').eq(i).offset().top;
}
$(window).bind('scroll',Scro)
function Scro(){
	for(j=0;j<=$('.j_lift').length;j++){
	  	if ($(document).scrollTop()>=h[j]-300){
	  		$('.lift_btn').removeClass('lift-on');
			$('.lift_btn').eq(j).addClass('lift-on');
	  	}
	}
}
window.addEventListener('scroll',function(){
	$(document).scrollTop()>=h[0]?$('.lift').fadeIn():$('.lift').fadeOut();
})//避免出现$(document).scrollTop()>=h[0]?$('.lift').slideDown():$('.lift').slideUp();到顶部不会消失的bug
$(window).resize(function(){//当窗口发生改变时电梯顶部会随着窗口变化
	var h=$(window).height()
	$('.lift').css('top',h/5)
})
