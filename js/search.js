


window.addEventListener('scroll',function(){
	 if($(document).scrollTop()<=1000){
	 	$('#search').removeClass('search-fix');
	 }else{
	 	$('#search').addClass('search-fix').slideDown();
	 }
},false)
