

$('#ban_ad .close').click(function(){//顶部广告
	$('#ban_ad').css('display','none')
})

$('.nav_l li').hover(function(){//定位
	$('#nav .posis').show();
	$('#nav .posi').css({
		'z-index':'11',
		'height': '32px',
		'border':'1px #ccc solid',
		'border-bottom':'none',
		'background-color': '#fff',		
	});
},function(){
	$('#nav .posis').hide();
	$('#nav .posi').css({
		'height': '30px',
		'border':'1px solid transparent',
		'background-color': '#E3E4E5'
	});
})
$('#nav .item a').click(function(){//点击改变位置
	$('#nav .posi a').html($(this).html());
	$('#nav .item a').removeClass('active');
	$('#nav .item a').addClass('on')
	$(this).addClass('active');
	$(this).removeClass('on')

})

$('#nav .f3').hover(function(){//我的京东
	$('.myjd').show();
	$('.f3').css({
		'height': '31px',
		'border':'1px #ccc solid',
		'border-bottom':'none',
		'background-color': '#fff',		
	});
},function(){
	$('.myjd').hide();
	$('.f3').css({
		'height': '28px',
		'border':'1px solid transparent',
		'background-color': '#e3e4e5'
	});
})

$('#f6').hover(function(){//客户服务
	$('#f6sv').show();
	$('#f6').css({
		'height': '32px',
		'border':'1px #ccc solid',
		'border-bottom':'none',
		'background-color': '#fff',		
	});
},function(){
	$('#f6sv').hide();
	$('#f6').css({
		'height': '28px',
		'border':'1px solid transparent',
		'background-color': '#E3E4E5'
	});
})

$('#f7').hover(function(){//网站导航
	$('#f7list').show();
	$('#f7').css({
		'height': '32px',
		'border':'1px #ccc solid',
		'border-bottom':'none',
		'background-color': '#fff',		
	});
},function(){
	$('#f7list').hide();
	$('#f7').css({
		'height': '28px',
		'border':'1px solid transparent',
		'background-color': '#E3E4E5'
	});
})

$('.gwc_head').hover(function(){//购物车
	$('.gwc_cont').show();
	$('.gwc_head').css({
		'height': '38px',
		'border': '1px #ccc solid',
		'border-bottom':'none',
	});
},function(){
	$('.gwc_cont').hide();
	$('.gwc_head').css({
		'height': '36px',
		'border': '1px #eee solid'
	});
})

$('.cate_menu_it').hover(function(){//侧边导航栏
	var n=$('.cate_menu_it').index($(this));
	$('.cate_it').hide();
	$('.cate_it').eq(n).show();
	$('.cate_menu_it').removeClass('cate_menu_itbg');
	$('.cate_menu_it').eq(n).addClass('cate_menu_itbg');
	$('.cate').hover(function(){
		$('.cate_cont').show();
	},function(){
	$('.cate_cont').hide();	
	$('.cate_menu_it').removeClass('cate_menu_itbg');
	})
})

//轮播
var end;
var n=0;
function changeLoop(){//发生变化的类
	$('.icon-circle').removeClass('lp_act');
	$('.icon-circle').eq(n).addClass('lp_act');
	$('.loop_it').stop().fadeOut(800);
	$('.loop_it').eq(n).stop().fadeIn(800);
}
$('.loop_btn i').hover(function(){//轮播小按键
	c=$('.loop_btn i').index($(this));
	n=c;
	changeLoop()
})
$('.loop_prev').click(function(){
	clearTimeout(end);
	n<=0?n=6:n-=2;//清除上下页抵消的bug,①clearTimeout(end);②n-=2;
	loop();
})	
$('.loop_next').click(function(){
	n>=8?n=0:n;
	loop();
})
function loop(){
	clearTimeout(end);
	changeLoop();
	n>=7?n=0:n++;
	end=setTimeout('loop()',3000);
}
$(window).bind('load',loop);
	
	
	
$('.tab_last').hover(function(){//下划线
	$('.news_unline').css('left','52px');
	$('.news_con1').css('display','none');
	$('.news_con2').css('display','block');
})
$('.tab_fist').hover(function(){
	$('.news_unline').css('left','0');
	$('.news_con2').css('display','none');
	$('.news_con1').css('display','block');
})

$('.mobile_btn').hover(function(){//京东无线
	$('.mobile_pop').css('display','block');
	$('.j_mobile').hover(function(){},function(){
		$('.mobile_pop').css('display','none');
	})
})

var shi;
function time(){//倒计时
	var t=[0,2,4,6,8,10,12,14,16,18,20,22,24];
	var day=new Date();
	var d=day.getDate();//得到本日
	var m=day.getMonth();//得到本月
	var y=day.getFullYear();//得到本年
	var dayh=day.getHours();//得到当前小时
	var goal=new Date(y,m,d,shi,0,0);
	var sur=(goal-day)/1000;
	var h=Math.floor(sur/3600);
	var min=Math.floor((sur-h*3600)/60);
	var s=Math.floor((sur-h*3600-min*60));
	String(h).length==1?$('.sk_hour').eq(0).html('0'+h):$('.sk_hour').eq(0).html(h);
	String(min).length==1?$('.sk_mins').eq(0).html('0'+min):$('.sk_mins').eq(0).html(min);
	String(s).length==1?$('.sk_secs').eq(0).html('0'+s):$('.sk_secs').eq(0).html(s);
	for(i=0;i<=t.length;i++){
		if(dayh>=t[i]&&dayh<=t[i+1]){
			shi=t[i+1];
		}
	}
}
time()
setInterval('time()',1000)

$('.sk_it_img').hover(function(){//秒杀图片悬浮上浮
	$(this).css('top','-5px')
},function(){
	$(this).css('top','0')
})

$('.find_it_img').hover(function(){//发现好货
	$(this).css('right','20px')
},function(){
	$(this).css('right','10px')
})
$('.brand_one_img').hover(function(){//品牌街
	$(this).css('right','10px')
},function(){
	$(this).css('right','0')
})

$('.top_head_it').hover(function(){//排行榜
	var n=$('.top_head_it').index($(this));
	$('.top_split').css('left',77*n+'px');
	$('.top_contk').removeClass('top_cont_on');
	$('.top_contk').eq(n).addClass('top_cont_on');
})

$('.coupon_img').hover(function(){//领券中心
	$(this).css('right','5px')
},function(){
	$(this).css('right','15px')
})

$('.list_lk img').hover(function(){//享品质
	$(this).css('right','10px')
},function(){
	$(this).css('right','0')
})

$('.lo_cover_img,.lo_more_img').hover(function(){//爱生活
	$(this).css('right','10px')
},function(){
	$(this).css('right','0')
})
$('.lo_show_img').hover(function(){//展示出的图片
	$(this).css('right','15px')
},function(){
	$(this).css('right','5px')
})

window.addEventListener('scroll',function(){//顶部搜索框
	if($(document).scrollTop()<800){
		$('#search').removeClass('search-fix').show();
	}else if($(document).scrollTop()>=1000){
		$('#search').addClass('search-fix').slideDown();
	}else{
		$('#search').removeClass('search-fix').hide();
	}
},false)

window.addEventListener('scroll',function(){//右侧菜单栏
	if($(document).scrollTop()>=2500){
		$('.toolbar').css('display','block');
	}
},false)

function boom(){
	var enlf=($(window).width()-$('#entry').width())/2;
	$('#entry').css('display','block');
	$('.entrybg').css('display','block');
	$('.entry').css('left',enlf)
}
$('#vip').click(function(){//会员登录弹框
	boom();
})
$('.tool-care').click(function(){//我的关注登录弹框
	boom();
})
$('.tool-consult').click(function(){//咨询登录弹框
	boom();
})
$('.en-icon').click(function(){//关闭弹框
	$('#entry').css('display','none');
	$('.entrybg').css('display','none');
})
$('#titsm').click(function(){//扫码登录
	$('#titzh').removeClass('dlon');
	$('#titsm').addClass('dlon');
	$('.zh').css('display','none');
	$('.sm').css('display','block');
})
$('#titzh').click(function(){//账号登录
	$('#titsm').removeClass('dlon');
	$('#titzh').addClass('dlon');
	$('.zh').css('display','block');
	$('.sm').css('display','none');
})
$('.bar').hover(function(){//悬浮到二维码出图片
	$('.barcode').stop().animate({left:0},'nomal',function(){
		$('.phcode').css('display','block');
	})
},function(){
	$('.phcode').css('display','none');
	$('.barcode').stop().animate({left:'65px'},'nomal');
})
$('.user').focus(function(){//用户得到焦点时换背景图片
	$('#en-us').addClass('en-hd');
	$('#en-pw').removeClass('en-ma');
})
$('.pwd').focus(function(){//密码框得到焦点时换背景图片
	$('#en-pw').addClass('en-ma');
	$('#en-us').removeClass('en-hd');
	$('#en-us').addClass('form-head');
})

$('.tool-car').click(function(){
	if($('.shopcar').css('display')=='none'){
		$('.toolbar').animate({right:'270px'},'normal',function(){
			$('.tool-car .tab-text').css('display','none');//当我的购物车展开时，‘我的购物车’不能显示
			$('.tool-history .tab-text').css('display','block');//当我的购物车展开时，‘我的足迹’显示
		})
		$('.myfoot').animate({left:'270px'},{queue: false,duration:200})
		$('.shopcar').animate({left:0},'fast',function(){
			$('.myfoot').css('display','none');//为了点击我的足迹时能切换
		})
		$('.shopcar').css('display','block');//为连点两下隐藏我的购物车做准备
	}else{
		$('.toolbar').animate({right:0},'normal',function(){
			$('.shopcar').css('display','none');
			$('.tool-car .tab-text').css('display','block');//当我的购物车隐藏时，‘我的购物车’显示
		})
	}
})
$('.tool-history').click(function(){
	if($('.myfoot').css('display')=='none'){
		$('.toolbar').animate({right:'270px'},'normal',function(){
			$('.tool-history .tab-text').css('display','none');//当我的足迹展开时，‘我的足迹’不能显示
			$('.tool-car .tab-text').css('display','block');//当我的足迹展开时，‘我的购物车’显示
		});
		$('.shopcar').animate({left:'270px'},{queue: false,duration:200})
		//queue：false的作用此动画不加入动画序列，而是直接执行，这样此动画就和下一个动画同时执行
		$('.myfoot').animate({left:0},'fast',function(){
			$('.shopcar').css('display','none');//为了点击我的购物车时能切换
		})
		$('.myfoot').css('display','block');//为连点两下隐藏我的足迹做准备
	}else{
			$('.toolbar').animate({right:0},'normal',function(){
				$('.myfoot').css('display','none');
				$('.tool-history .tab-text').css('display','block');//当我的足迹隐藏时，‘我的足迹’显示
		})
	}
})
$('.car-close').click(function(){
	$('.toolbar').animate({right:0},'normal');
	$('.shopcar').css('display','none');
	$('.myfoot').css('display','none');
	$('.tool-history .tab-text').css('display','block');
	$('.tool-car .tab-text').css('display','block');
})

//$('.toolbar').blur(function(){
//	$('.toolbar').animate({right:0},'normal');
//	console.log(1)
//})
