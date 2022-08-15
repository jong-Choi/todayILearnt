$(document).ready(function() {

	/* Global Menu */
	var globalMnLI = $('#globalMenu > ul > li');

	$('#globalMenu > ul > li > a').click(function(){
		if($(this).next().css('display') == 'none'){
			$(globalMnLI).removeClass('on');
			$(this).parent().addClass('on');
			if($('.global1').is(':visible'))	$('#k_id').focus();
		}else{
			$(globalMnLI).removeClass('on');
		}
		//return false;
	});
	$('.global1 div .close').click(function(){
		$(globalMnLI).removeClass('on');		
		return false;
	});


	/* Top Menu */
	var topSubMn = $('#topMenu > div > ul > li div');

	$('#topMenu > div > ul > li > a').bind('mouseover focus',function(){
		if(!$(this).next('div').is(":animated")){
			$(topSubMn).slideUp(200);
			$(this).next('div').slideDown(200);
		}
	});
	$('#topMenu > div > ul').bind('mouseleave',function(){
		if(!$(this).next('div').is(":animated")){
			$(topSubMn).slideUp(200);
		}
	});
	$('#topMenu > div > ul > li div ul li').last().children().focusout(function(){
		$(this).parent().parent().parent().slideUp(200);
	});

	/* 상세검색 */
	$('#search > div.search > a').click(function(){
		if($('#search > div.search form').css('display')=='block'){
			$('#search > div.search form').hide();
		}else{
			$('#search > div.search form').show();
		}
		return false;
	});
	$('#search > div.search .searchClose').click(function(){
		$('#search > div.search form').hide();
		return false;
	});
});
