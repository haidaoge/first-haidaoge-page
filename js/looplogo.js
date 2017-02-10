


var c=1;//计数
var unitw;
var lf=c*unitw;
$('.lo_logo').css('left',lf);
$('.lo_logo_btn_l').click(function(){
	var n=$('.lo_logo_btn_l').index($(this));
	var unitw=-$('.lo_logo').eq(n).width()/4;//整行图标长度的四分之一
	c--;
	lf=unitw*c;//向左移动的长度
	if(c<=0){//由第二块到第一块滑动过后立即让其呈现第三块内容
		$('.lo_logo').eq(n).animate({left:lf},'solw',function(){
			lf=2*unitw;
			c=2;
			$('.lo_logo').eq(n).css('left',lf+'px');
		})
		c=2;
	}else{
		$('.lo_logo').eq(n).animate({left:lf},'solw')
	}
	
})
$('.lo_logo_btn_n').bind('click',Gf);
function Gf(){
	var m=$('.lo_logo_btn_n').index($(this));
	var unitw=-$('.lo_logo').eq(m).width()/4;
	c++;
	lf=unitw*c;
	if(c>=3){
		$('.lo_logo').eq(m).stop().animate({left:lf},'solw',function(){
			lf=unitw;
			c=1;
			$('.lo_logo').eq(m).css('left',lf+'px');
		})
		c=1;
	}else{
		$('.lo_logo').eq(m).stop().animate({left:lf},'solw')
	}
}
