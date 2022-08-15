//Input 백그라운드 
function 
    clrImg(obj){
        obj.style.background="";
		obj.onkeydown=obj.onmousedown=null;
    }



// png 파일 투명 처리
function setPng24(obj) {
    obj.width=obj.height=1;
    obj.className=obj.className.replace(/\bpng24\b/i,'');
    obj.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
    obj.src='';
    return '';
}

/* 팝업 레이어 */

function showhideLayer(targetId) {                                         
    var el = document.getElementById(targetId);                             
    if((el) && (el.style.display == "none")) el.style.display = "block";    
    else if((el) && (el.style.display =="block")) el.style.display = "none";
}



function swf_include(swfUrl,swfWidth,swfHeight,swfName,flashVars){
	// 플래시 코드 정의
	var flashStr=
	"<object classid='clsid:d27cdb6e-ae6d-11cf-96b8-444553540000' codebase='http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0' width='"+swfWidth+"' height='"+swfHeight+"' id='"+swfName+"' align='middle' />"+
	"<param name='allowScriptAccess' value='sameDomain' />"+
	"<param name='allowFullScreen' value='true' />"+
	"<param name='movie' value='"+swfUrl+"' />"+
	"<param name='FlashVars' value='"+flashVars+"' />"+
	"<param name='loop' value='false' />"+
	"<param name='wmode' value='transparent' />"+
	"<param name='quality' value='high' />"+
    "<param name='scale' value='noscale' />"+
	"<param name='bgcolor' value='#ffffff' />"+
	"<embed src='"+swfUrl+"' FlashVars='"+flashVars+"' quality='best' wmode='transparent' width='"+swfWidth+"' height='"+swfHeight+"' name='"+swfName+"' align='middle' allowScriptAccess='sameDomain' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' />"+
	"</object>";

	// 플래시 코드 출력
	document.write(flashStr);
};




/*메인공지 탭매뉴와 레이어*/
var url = "";
	
try
{
	url = top.location.href;
}
catch(a)
{}
	
function best(n) {
    for(var i = 1; i < 3; i++) {
        obj = document.getElementById('best'+i);
        img = document.getElementById('board_'+i);
        if ( n == i ) {
            obj.style.display = "block";
			img.height = 14
            img.src = "../images/main/main_board_tab0"+i+"_on.gif";    
        } else {
            obj.style.display = "none";
			img.height = 14;
            img.src = "../images/main/main_board_tab0"+i+"_off.gif";
        }
    }
}

function swapImg(img, link) {
	
	
	document.getElementById('link').href = link;
}




/*warp사이즈에 따른 변경*/
function bodyReSize(chkSize){


	var Browser = {
		Version: function() {
			var version = 999; // we assume a sane browser
			if (navigator.appVersion.indexOf("MSIE") != -1)      // bah, IE again, lets downgrade version number
			version = parseFloat(navigator.appVersion.split("MSIE")[1]);
			return version;
			}
		}
		if(Browser.Version() > 6){
				try{
					$(window).resize(function(){

							var width = $("body").width();

							if(Number(width) < chkSize){
								$("#wrap").attr("class", "wrap930");
							} else {

								$("#wrap").attr("class", "wrap");
							}


					}).resize();
				} catch (e){

				}
		} else {
			$("#wrap").attr("class", "wrap930");
		}

}


// GNB
var inter_id = "";
function ini_navi(){
	var gnbNavi = document.getElementById("gnb");
	var subMenu = gnbNavi.getElementsByTagName("ul");
	for (i=0; i<subMenu.length; i++) {
		subMenu[i].style.display = "none"; // 전체 서브레이어 숨김.
	}
	var gnbMenu = gnbNavi.getElementsByTagName("img");
	for (j=0; j<gnbMenu.length; j++) {
		gnbMenu[j].src = gnbMenu[j].src.replace("_on.gif","_off.gif");
	}
}
function explosive(){
	clearInterval(inter_id);
	inter_id = setInterval("ini_navi()",2000);
}

function gnbNavi() {
	var gnbNavi = document.getElementById("gnb");
	var subMenu = gnbNavi.getElementsByTagName("ul");
	for (i=0; i<subMenu.length; i++) {
		subMenu[i].style.display = "none"; // 전체 서브레이어 숨김.

		var subLink = subMenu[i].getElementsByTagName("a");
		for (var m=0; m<subLink.length; m++) { // 서브메뉴 이미지 롤오버
			thismenu = subLink[m];
			thismenu.onmouseover = function() {
				clearInterval(inter_id);
				subImage = this.getElementsByTagName("img")[0];
				if(subImage.src.indexOf('_on.gif') == -1) subImage.src = subImage.src.replace("_off.gif","_on.gif");
			}
			subLink[m].onmouseout = function() {
				explosive();
				subImage = this.getElementsByTagName("img")[0];
				if(subImage.src.indexOf('_on.gif') != -1) subImage.src = subImage.src.replace("_on.gif","_off.gif");
			}
			subLink[m].onfocus = function() {
				clearInterval(inter_id);
				subImage = this.getElementsByTagName("img")[0];
				if(subImage.src.indexOf('_on.gif') == -1) subImage.src = subImage.src.replace("_off.gif","_on.gif");
			}
			subLink[m].onblur = function() {
				explosive();
				subImage = this.getElementsByTagName("img")[0];
				if(subImage.src.indexOf('_on.gif') != -1) subImage.src = subImage.src.replace("_on.gif","_off.gif");
			}
		}
	}

	var gnbMenu = gnbNavi.getElementsByTagName("li");
	for (j=0; j<gnbMenu.length; j++) {
		if (gnbMenu[j].className == "gnb_menu") {
			thismenu = gnbMenu[j].getElementsByTagName("a")[0];
			
			thismenu.onmouseover = function() {
				clearInterval(inter_id);
				subMenu = gnbNavi.getElementsByTagName("ul");
				for (k=0; k<subMenu.length; k++) {
					subMenu[k].style.display = "none";
					subMenu[k].parentNode.style.zIndex = "0";
				}
				
				gnbImg = gnbNavi.getElementsByTagName("img");
				for (l=0; l<gnbImg.length; l++) {
					if (gnbImg[l].src.indexOf("_on.gif") != -1 ){
						gnbImg[l].src = gnbImg[l].src.replace("_on.gif","_off.gif");
					}
				}

				this.getElementsByTagName("img")[0].src = this.getElementsByTagName("img")[0].src.replace("_off.gif","_on.gif");
				if (!this.parentNode.getElementsByTagName("ul")[0]) return false;
				this.parentNode.getElementsByTagName("ul")[0].style.display = "block";
				this.parentNode.getElementsByTagName("ul")[0].parentNode.style.zIndex = "1";
			}

			thismenu.onmouseout = function() {
				explosive();
			}

			thismenu.onfocus = function() {
				clearInterval(inter_id);
				subMenu = gnbNavi.getElementsByTagName("ul");
				for (k=0; k<subMenu.length; k++) {
					subMenu[k].style.display = "none";
					subMenu[k].parentNode.style.zIndex = "0";
				}

				gnbImg = gnbNavi.getElementsByTagName("img");
				for (l=0; l<gnbImg.length; l++) {
					if (gnbImg[l].src.indexOf("_on.gif") != -1 ){
						gnbImg[l].src = gnbImg[l].src.replace("_on.gif","_off.gif");
					}
				}

				this.getElementsByTagName("img")[0].src = this.getElementsByTagName("img")[0].src.replace("_off.gif","_on.gif");
				if (!this.parentNode.getElementsByTagName("ul")[0]) return false;
				this.parentNode.getElementsByTagName("ul")[0].style.display = "block";
				this.parentNode.getElementsByTagName("ul")[0].parentNode.style.zIndex = "1";
			}
			thismenu.onblur = function() {
				explosive();
			}

		}
	}	
}

/* 이미지 온오프 */
function imageOver(imgs) {
    //alert(imgs);
	imgs.src = imgs.src.replace("off.gif", "on.gif");
 
}
 
function imageOut(imgs) {
 
	imgs.src = imgs.src.replace("on.gif", "off.gif");
 }


/** 쿠키값 저장   **/	
function f_set_cookie( name, value, expiredays ) {
    var todayDate = new Date();
    todayDate.setDate( todayDate.getDate() + expiredays );
    document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";"
}   

/** 쿠키값 가져오기   **/	
	function f_get_cookie(name) { 
	var Found = false 
	var start, end 
	var i = 0 

	// cookie 디렉토리에 담겨있는 쿠키 문자열 전체를 검색해서.. 
	while(i <= document.cookie.length) { 
	start = i 
	end = start + name.length 

	// 띄우고자 하는 쿠키 name 과 동일한 문자가 있다면 
	if(document.cookie.substring(start, end) == name) { 
	Found = true 
	break 
	} 
	i++ 
	} 

	// Cookie 에서 name 문자열을 찾았으면 
	if(Found == true) { 
	start = end + 1 
	end = document.cookie.indexOf(";", start) 

	if(end < start) 
	end = document.cookie.length 

	// name에 해당하는 value값을 추출하여 리턴한다. 
	return document.cookie.substring(start, end) 
	} 

	// 같은 문자열을 찾지 못했으면 반환 
	return "" 
	} 
