$(document).ready(function(){

	$('#navigationMenu li .normalMenu').each(function(){

		$(this).before($(this).clone().removeClass().addClass('hoverMenu'));

	});
	
	$('#navigationMenu li').hover(function(){
	
		$(this).find('.hoverMenu').stop().animate({marginTop:'10px'},400);

	},
	
	function(){
	
		$(this).find('.hoverMenu').stop().animate({marginTop:'-45px'},400);

	});
	
});
