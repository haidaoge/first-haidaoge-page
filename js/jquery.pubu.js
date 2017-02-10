

$(window).bind('scroll',pubu);
//var srcp=new Array();
//for(j=0;j<98;j++){
//	srcp[j]=j;
//}
function pubu(){
	var botm=$(document).height()-$(window).height()-$(document).scrollTop();
		function addImg(){
			for(i=0;i<5;i++){
				var src=Math.floor(Math.random()*98)+1;
				$('.more_list').append('<li class="more_it"><a href="###" class="more_it_lk"><img src="img/pb'+src+'.jpeg" class="more_img"/><div class="more_info"><p class="more_info_dis">【京东超市】三只松鼠 休闲零食 干脆面串烧味 小贱拉面丸子85g/袋</p><p class="more_info_price"><i>￥</i><span>28</span></p></div></a></li>')
			$('.more_it:last-child').hide().fadeIn(1000)	
			}
		}
		if (botm<=700) {
			addImg();
			addImg();
		}
		if($('.more_list').height()>10000){
			$(window).unbind('scroll',pubu);
		}
}
	

